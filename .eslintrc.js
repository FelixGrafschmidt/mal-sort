module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ["prettier", "plugin:prettier/recommended", "plugin:nuxt/recommended"],
	plugins: ["prettier"],
	// add your custom rules here
	rules: {
		"no-console": "off",
		"no-debug": "off",
		"vue/comment-directive": "off"
	},
	ignorePatterns: [".nuxt/"],
};
