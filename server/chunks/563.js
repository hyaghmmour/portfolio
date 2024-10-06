exports.id=563,exports.ids=[563],exports.modules={6849:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,3642,23)),Promise.resolve().then(o.t.bind(o,7586,23)),Promise.resolve().then(o.t.bind(o,7838,23)),Promise.resolve().then(o.t.bind(o,8057,23)),Promise.resolve().then(o.t.bind(o,7741,23)),Promise.resolve().then(o.t.bind(o,3118,23))},4046:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,4080,23)),Promise.resolve().then(o.bind(o,9959)),Promise.resolve().then(o.bind(o,4506)),Promise.resolve().then(o.bind(o,7846)),Promise.resolve().then(o.bind(o,6171)),Promise.resolve().then(o.bind(o,887))},9959:(e,t,o)=>{"use strict";o.d(t,{Dock:()=>h,DockIcon:()=>f});var i=o(7247),n=o(677),r=o(1608),a=o(2574),s=o(6739),l=o(8673),c=o(5646),d=o(8964),p=o.n(d);let m=60,u=140,g=(0,r.j)("mx-auto w-max h-full p-2 flex items-end rounded-full border"),h=p().forwardRef(({className:e,children:t,magnification:o=m,distance:r=u,...l},c)=>{let d=(0,a.c)(1/0);return i.jsx(s.E.div,{ref:c,onMouseMove:e=>d.set(e.pageX),onMouseLeave:()=>d.set(1/0),...l,className:(0,n.cn)(g({className:e})),children:p().Children.map(t,e=>p().isValidElement(e)?p().cloneElement(e,{mousex:d,magnification:o,distance:r}):e)})});h.displayName="Dock";let f=({size:e,magnification:t=m,distance:o=u,mousex:r,className:a,children:p,...g})=>{let h=(0,d.useRef)(null),f=(0,l.H)(r,e=>{let t=h.current?.getBoundingClientRect()??{x:0,width:0};return e-t.x-t.width/2}),v=(0,l.H)(f,[-o,0,o],[40,t,40]),b=(0,c.q)(v,{mass:.1,stiffness:150,damping:12});return i.jsx(s.E.div,{ref:h,style:{width:b},className:(0,n.cn)("flex aspect-square cursor-pointer items-center justify-center rounded-full",a),...g,children:p})};f.displayName="DockIcon"},4506:(e,t,o)=>{"use strict";o.d(t,{ModeToggle:()=>m});var i=o(7247),n=o(9008),r=o(1608),a=o(8964),s=o(677);let l=(0,r.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 rounded-full"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef(({className:e,variant:t,size:o,asChild:r=!1,...a},c)=>{let d=r?n.g7:"button";return i.jsx(d,{className:(0,s.cn)(l({variant:t,size:o,className:e})),ref:c,...a})});c.displayName="Button";var d=o(2095),p=o(7797);function m(){let{theme:e,setTheme:t}=(0,p.F)();return(0,i.jsxs)(c,{variant:"ghost",type:"button",size:"icon",className:"px-2",onClick:()=>t("dark"===e?"light":"dark"),children:[i.jsx(d.NWY,{className:"h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200"}),i.jsx(d.kLh,{className:"hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200"})]})}},7846:(e,t,o)=>{"use strict";o.d(t,{ThemeProvider:()=>r});var i=o(7247),n=o(7797);function r({children:e,...t}){return i.jsx(n.f,{...t,children:e})}},6171:(e,t,o)=>{"use strict";o.d(t,{Separator:()=>s});var i=o(7247),n=o(8964),r=o(9629),a=o(677);let s=n.forwardRef(({className:e,orientation:t="horizontal",decorative:o=!0,...n},s)=>i.jsx(r.f,{ref:s,decorative:o,orientation:t,className:(0,a.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...n}));s.displayName=r.f.displayName},887:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Tooltip:()=>l,TooltipContent:()=>d,TooltipProvider:()=>s,TooltipTrigger:()=>c});var i=o(7247),n=o(3253),r=o(8964),a=o(677);let s=n.zt,l=n.fC,c=n.xz,d=r.forwardRef(({className:e,sideOffset:t=4,...o},r)=>i.jsx(n.VY,{ref:r,sideOffset:t,className:(0,a.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));d.displayName=n.VY.displayName},677:(e,t,o)=>{"use strict";o.d(t,{cn:()=>r});var i=o(1929),n=o(5770);function r(...e){return(0,n.m6)((0,i.W)(e))}},3107:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>S,metadata:()=>P});var i=o(2051),n=o(5894),r=o.n(n),a=o(5347);let s=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/magicui/dock.tsx#Dock`),l=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/magicui/dock.tsx#DockIcon`);(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/magicui/dock.tsx#dockVariants`);let c=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/mode-toggle.tsx#ModeToggle`);var d=o(6734),p=o(5994),m=o(6269),u=o(9812);let g=(0,p.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 rounded-full"}},defaultVariants:{variant:"default",size:"default"}});m.forwardRef(({className:e,variant:t,size:o,asChild:n=!1,...r},a)=>{let s=n?d.g7:"button";return i.jsx(s,{className:(0,u.cn)(g({variant:t,size:o,className:e})),ref:a,...r})}).displayName="Button";let h=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/ui/separator.tsx#Separator`),f=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/ui/tooltip.tsx#Tooltip`),v=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/ui/tooltip.tsx#TooltipContent`),b=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/ui/tooltip.tsx#TooltipProvider`),x=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/ui/tooltip.tsx#TooltipTrigger`);var w=o(2639),y=o(2349);function k(){return(0,i.jsxs)("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14",children:[i.jsx("div",{className:"fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"}),(0,i.jsxs)(s,{className:"z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ",children:[w.D.navbar.map(e=>i.jsx(l,{children:(0,i.jsxs)(f,{children:[i.jsx(x,{asChild:!0,children:i.jsx(y.default,{href:e.href,className:(0,u.cn)(g({variant:"ghost",size:"icon"}),"size-12"),children:i.jsx(e.icon,{className:"size-4"})})}),i.jsx(v,{children:i.jsx("p",{children:e.label})})]})},e.href)),i.jsx(h,{orientation:"vertical",className:"h-full"}),Object.entries(w.D.contact.social).filter(([e,t])=>t.navbar).map(([e,t])=>i.jsx(l,{children:(0,i.jsxs)(f,{children:[i.jsx(x,{asChild:!0,children:i.jsx(y.default,{href:t.url,className:(0,u.cn)(g({variant:"ghost",size:"icon"}),"size-12"),children:i.jsx(t.icon,{className:"size-4"})})}),i.jsx(v,{children:i.jsx("p",{children:e})})]})},e)),i.jsx(h,{orientation:"vertical",className:"h-full py-2"}),i.jsx(l,{children:(0,i.jsxs)(f,{children:[i.jsx(x,{asChild:!0,children:i.jsx(c,{})}),i.jsx(v,{children:i.jsx("p",{children:"Theme"})})]})})]})]})}let j=(0,a.createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/theme-provider.tsx#ThemeProvider`);o(5023);let P={metadataBase:new URL(w.D.url),title:{default:w.D.name,template:`%s | ${w.D.name}`},description:w.D.description,openGraph:{title:`${w.D.name}`,description:w.D.description,url:w.D.url,siteName:`${w.D.name}`,locale:"en_US",type:"website"},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-video-preview":-1,"max-image-preview":"large","max-snippet":-1}},twitter:{title:`${w.D.name}`,card:"summary_large_image"},verification:{google:"",yandex:""}};function S({children:e}){return i.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:i.jsx("body",{className:(0,u.cn)("min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",r().variable),children:i.jsx(j,{attribute:"class",defaultTheme:"light",children:(0,i.jsxs)(b,{delayDuration:0,children:[e,i.jsx(k,{})]})})})})}},2639:(e,t,o)=>{"use strict";o.d(t,{D:()=>s});var i=o(2051),n=o(8406),r=o(1755);let a={globe:e=>i.jsx(n.Z,{...e}),email:e=>i.jsx(r.Z,{...e}),linkedin:e=>(0,i.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("title",{children:"LinkedIn"}),i.jsx("path",{fill:"currentColor",d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]}),github:e=>i.jsx("svg",{viewBox:"0 0 438.549 438.549",...e,children:i.jsx("path",{fill:"currentColor",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})})},s={name:"Hamza Yaghmmour",initials:"HY",url:"https://hamzayaghmmour.io",location:"Washington, D.C.",locationLink:"https://www.google.com/maps/place/sanfrancisco",description:"Passionate About Tech, Driven by Results",summary:"I'm a Full Stack Software Engineer specializing in mobile and web development, with a focus on infrastructure automation. I've led projects in GenAI at Boeing and financial inclusion platforms like MoneyFlap, excelling in technologies like React.js, Flutter, Node.js, GoLang, and AWS.",avatarUrl:"/profile.jpg",skills:["React.js","Node.js","Python","Go","Postgres","Docker","Kubernetes","TypeScript","gRPC","RabbitMQ","Terraform","Redux","Ansible","Flutter","Dart","AWS","NLP","GenAI","Java"],navbar:[{href:"/",icon:o(6831).Z,label:"Home"}],contact:{email:"hyaghmmour@gmail.com",tel:"+17035379281",social:{GitHub:{name:"GitHub",url:"https://www.github.com/hyaghmmour",icon:a.github,navbar:!0},LinkedIn:{name:"LinkedIn",url:"https://www.linkedin.com/in/hyaghmmour",icon:a.linkedin,navbar:!0},Email:{name:"Send Email",url:"mailto:hyaghmmour@gmail.com",icon:a.email,navbar:!0}}},work:[{company:"Boeing Intelligence & Analytics",href:"https://www.bia-boeing.com/",badges:[],location:"Annapolis Junction, MD",title:"Software Engineer II",logoUrl:"/boeing.png",start:"March 2023",end:"Present",description:"I spearheaded several internal projects, including groundbreaking GenAI initiatives and the development of a cloud suite leveraging Kubernetes, RabbitMQ, gRPC, and Terraform, all in full compliance with contractual obligations. I mentored interns across various technical disciplines, helping accelerate their professional growth and ensuring their active contribution to key projects. Additionally, I implemented Ansible for configuration management and Docker for containerization, optimizing system provisioning and application deployment across development, testing, and production environments."},{company:"Boeing Intelligence & Analytics",href:"https://www.bia-boeing.com/",badges:[],location:"Annapolis Junction, MD",title:"Software Engineer I",logoUrl:"/boeing.png",start:"June 2022",end:"March 2023",description:"I designed and developed an entity-extraction application using NLP libraries and tools, enhancing virus detection capabilities. I integrated SpaCy for advanced NLP processing and implemented Jenkins as a CI/CD pipeline, automating the build, test, and deployment processes for rapid code delivery."},{company:"Airspace Link",href:"https://airspacelink.com/",badges:[],location:"Detroit, MI",title:"Software Engineer I",logoUrl:"/al.jpeg",start:"December 2021",end:"May 2022",description:"I conducted comprehensive testing for a React application, including unit, integration, and user acceptance tests. I developed and maintained features in compliance with FAA regulations to optimize drone pathing. Thriving in a startup environment, I contributed to rapid growth by delivering high-quality features on tight schedules and collaborating across cross-functional teams."},{company:"Boeing Intelligence & Analytics",href:"https://www.bia-boeing.com/",badges:[],location:"Annapolis Junction, MD",title:"Software Engineer Intern",logoUrl:"/boeing.png",start:"June 2021",end:"August 2021",description:"Collaborated with a cohort of interns to design and implement an efficient solution to extract and tokenize valuable information from a multitude of documents with NLP technologies. Leveraging tools such as ElasticSearch, AWS, and Jenkins."},{company:"HCM Tradeseal",href:"https://hcmtradeseal.com/",badges:[],location:"Ann Arbor, MI",title:"Software Engineer Intern",logoUrl:"/hcm.png",start:"September 2020",end:"May 2021",description:"Worked closely with leadership to learn efficient debugging practices. Created scripts with Python3 to effectively streamline creation of slideshow presentations."}],education:[{school:"George Mason University",href:"https://www.gmu.edu/",degree:"B.S. Computer Science",logoUrl:"/gmu.png",start:"",end:""}],projects:[{title:"MoneyFlap",href:"https://www.moneyflap.com",dates:"Aug 2022 - Present`",active:!0,description:"With the world of finance evolving towards the blockchain, MoneyFlap was created as a way to bridge the gap between underserved and first-world countries. Providing accounts on all EVM chains, global issuance of virtual/physical cards, and deposits, withdraws and transfers available in 180+ countries.",technologies:["Flutter","Typescript","PostgreSQL","Supabase","Vercel"],links:[{type:"Website",href:"https://www.moneyflap.com",icon:i.jsx(a.globe,{className:"size-3"})}],image:"/mf.png",video:""},{title:"Vaccess.io",href:"https://devpost.com/software/vaccess-io",dates:"March 2020 - June 2020",active:!0,description:"Developed, designed and implemented an efficient mock solution for a unique way to handle vaccine distribution during Covid-19.",technologies:["React.js","Java","PostgreSQL"],links:[{type:"Website",href:"https://devpost.com/software/vaccess-io",icon:i.jsx(a.globe,{className:"size-3"})}],image:"/vaccess.jpg",video:""},{title:"Student Spot",href:"https://devpost.com/software/student-spot",dates:"April 2021",active:!0,description:"Designed and developed an application to help tailor a effective study plan for students by leveraging Artificial Intelligence.",technologies:["React.js","Typescript","Artificial Intelligence","Python","Flask"],links:[{type:"Website",href:"https://devpost.com/software/student-spot",icon:i.jsx(a.globe,{className:"size-3"})}],image:"/ss.png",video:""}],hackathons:[{title:"GMU Hackathon",dates:"March 2022",location:"San Francisco, California",description:"Designed and developed an application to help tailor a effective study plan for students by leveraging Artificial Intelligence.",image:"/gmu.png",links:[]},{title:"Hack The Pandemic",dates:"March 2021",location:"Stockholm, Sweden",description:"Designed and developed a unique way to predict the spread of Covid-19.",image:"",mlh:"",links:[]},{title:"MIT Africa Takes On Covid-19",dates:"May 2020",location:"Lagos, Nigeria",description:"Developed an EMR Solution in Nigeria for streamlining communication between patients and doctors, without risking infection.",image:"/mit.png",mlh:"",links:[]},{title:"Luminata Covid-19 Global AI Hackathon",dates:"April 2020",location:"Global",description:"Developed a solution that effectively destributed Covid-19 vaccines based off demographic data.",image:"",links:[]},{title:"IBM Call For Code",dates:"March 2020",location:"Remote - USA",description:"Developed an effective analytics solution for predicting severity of Covid-19 spread leveraging only IBM Cloud Technologies.",icon:"public",image:"/ibm.jpg",links:[]}],certifications:[{title:"AWS Certified Solutions Architect - Associate",period:"July 2024",logo:"/aws.png"},{title:"AWS Certified Cloud Practitioner",period:"March 2023",logo:"/aws.png"}]}},9812:(e,t,o)=>{"use strict";o.d(t,{cn:()=>r,p:()=>a});var i=o(6272),n=o(1472);function r(...e){return(0,n.m6)((0,i.W)(e))}function a(e){let t=new Date().getTime();e.includes("T")||(e=`${e}T00:00:00`);let o=Math.floor(Math.abs(t-new Date(e).getTime())/864e5),i=new Date(e).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"});return o<1?"Today":o<7?`${i} (${o}d ago)`:o<30?`${i} (${Math.floor(o/7)}w ago)`:o<365?`${i} (${Math.floor(o/30)}mo ago)`:`${i} (${Math.floor(o/365)}y ago)`}},5023:()=>{}};