/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["res.cloudinary.com"],
	},
	compiler: {
		// The regexes defined here are processed in Rust so the syntax is different from
		// JavaScript `RegExp`s. See https://docs.rs/regex.
		reactRemoveProperties: { properties: ["^data-custom$"] },
	},
};

module.exports = nextConfig;
