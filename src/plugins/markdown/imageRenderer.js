import {visit} from 'unist-util-visit'
import API from '../../data/api';

export default function imageRenderer(options) {
	return (tree) => {
        visit(tree, "element", (node) => {
            if(node.tagName === "img" && node.properties.src.startsWith('./')) {
                let imageName = node.properties.src.split('./')[1];
                
                if(imageName != null) {
                    node.properties.src = `${API().getUri()}plugins/${options.pluginId}/attachments/${imageName}`;
                    node.properties.crossOrigin = "anonymous";
                }
            }
        })
    }
}
