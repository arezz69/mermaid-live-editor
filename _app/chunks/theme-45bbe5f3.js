import{J as e,K as t,C as o}from"./vendor-169c5480.js";const r=e(o({isDark:!1}),t(),"themeStore"),l=["dark","synthwave","halloween","aqua","forest","luxury","black","dracula"],i=s=>{s.includes(" ")&&(s=s.split(" ")[1].trim());const a=l.includes(s);console.log("Setting theme",s),r.set({theme:s,isDark:a})};export{i as s,r as t};