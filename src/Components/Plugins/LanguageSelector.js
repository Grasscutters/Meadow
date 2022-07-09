import React from "react";
import languages from "../../data/languages";

export default function LanguageSelector(props) {
	function handleChange(e) {
		var options = e.target.options;
		var value = [];
		for (var i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}
        
		props.onChange(value);
	}

	return (
		<select name="language-selector" id="language-selector" multiple={props.multiple} onChange={(e) => handleChange(e)} value={props.value}>
			{languages.map((language, index) => {
				return (
					<option key={language.code} value={language.code}>
						{language.name} {language.name !== language.englishName ? `(${language.englishName})` : null}
					</option>
				);
			})}
		</select>
	);
}
