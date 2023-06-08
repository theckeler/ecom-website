/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.cubcadet.com",
			},
			{
				protocol: "https",
				hostname: "ubcadet.com",
			},
			{
				protocol: "https",
				hostname: "www.google.com",
			},
			{
				protocol: "https",
				hostname: "google.com",
			},
		],
	},
};

module.exports = nextConfig;
