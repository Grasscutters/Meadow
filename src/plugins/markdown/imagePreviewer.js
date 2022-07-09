import {visit} from 'unist-util-visit'

export default function imagePreviewer(options) {
	return (tree) => {
        visit(tree, "element", (node) => {
            if(node.tagName === "img" && node.properties.src.startsWith('./')) {
                let imageName = node.properties.src.split('./')[1];
                let image = options.images.find(image => image.imageName === imageName);
                
                if(image != null) {
                    node.properties.src = `${image.previewBlob}`;
                }
            }
        })
    }
}
