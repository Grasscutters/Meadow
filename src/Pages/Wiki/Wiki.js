import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Header from '../../Components/Header'
import withRouter from '../../Components/WithRouter';
import API from '../../data/api';
import imageRenderer from '../../plugins/markdown/imageRenderer'
import "./Wiki.css"

class Wiki extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wikiData: null,
			path: "",
		};
	}

	componentDidMount() {
		if (this.props.router.location.pathname === "/wiki" || this.props.router.location.pathname === "/wiki/") {
			API()
				.get(`/wiki/Welcome`)
				.then((res) => {
					this.setState({
						wikiData: res.data,
						path: `/wiki/Welcome`,
					});
				});
		} else {
			API()
				.get(`${this.props.router.location.pathname}`)
				.then((res) => {
					this.setState({
						wikiData: res.data,
						path: this.props.router.location.pathname,
					});
				});
		}

        console.log(this.state.wikiData)
	}

  render() {
    return (
        <>
            <Header />
            { this.state.wikiData ? 
                <div className="wikiData">
                    <ReactMarkdown 
                        children={this.state.wikiData} 
                        rehypePlugins={[[imageRenderer.wikiImageRenderer, { rootPath: this.props.forcedPath ? this.props.forcedPath : this.props.router.params.id }]]} 
                    />
                </div>
            : null }
        </>
    )
  }
}

export default withRouter(Wiki);