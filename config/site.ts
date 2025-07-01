export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Contentful Website",
	description: "The testing ground to make it happen.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
 
   
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
	
		{
			label: "Calendar",
			href: "/calendar",
		},
	
	
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		discord: "https://discord.gg/",
    sponsor: "https://patreon.com/"
	},
};
