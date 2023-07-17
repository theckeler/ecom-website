/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.cubcadet.com",
			},
			{
				protocol: "https",
				hostname: "*.google.com",
			},
			{
				protocol: "https",
				hostname: "*.imgur.com",
			},
		],
	},
};

module.exports = nextConfig;
