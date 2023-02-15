INDEX.JS
|
|___ERRORPAGE
|___ABOUTPAGE
|
|___APP
|&emsp;&emsp;|___PreLoadImagesFunc&emsp;&emsp;
|&emsp;&emsp;|___BackgroundComponent
|&emsp;&emsp;|___MoonSection (Date & Moonphase info passed to "ASideDatePhase")
|&emsp;&emsp;|___DuaLipa
|&emsp;&emsp;|___AboutLinkComponent  (Link to "ABOUTPAGE")
|&emsp;&emsp;|___FormSection
|&emsp;&emsp;|&emsp;&emsp;|___PortalLinkComponent (Link to "PORTAL")
|&emsp;&emsp;|&emsp;&emsp;|___SearchBarComponent  (Client-Side API Calls) (Weather & Astro data rendered in "BSideWeatherAstro")
|&emsp;&emsp;|
|&emsp;&emsp;|___FlipDisplaySection
|&emsp;&emsp;|&emsp;&emsp;|___ASideDatePhase
|&emsp;&emsp;|&emsp;&emsp;|___BSideWeatherAstro
|&emsp;&emsp;|
|&emsp;&emsp;|___ConstructionDisplay
|&emsp;&emsp;|___SettingScrollFunc
|&emsp;&emsp;|___SpikingScrollFun
|&emsp;&emsp;
|&emsp;&emsp;
|___PORTAL
&emsp;&emsp; |___AuthPage
&emsp;&emsp; |&emsp;&emsp;|___SignUpForm 
&emsp;&emsp; |&emsp;&emsp;|___SignInForm
&emsp;&emsp; |
&emsp;&emsp; |___JournalPage
&emsp;&emsp;&emsp;&emsp;  |___PortalNavBar
&emsp;&emsp;&emsp;&emsp;  |___SideBar
&emsp;&emsp;&emsp;&emsp;  |___JournalEntry
&emsp;&emsp;&emsp;&emsp;  |___NewEntry


AJAX Request Path Client to Server:
<-- "src/pages/Portal/utilities/users-services.js" --> 
<-- "./users-api.js" --> 
<-- "server.js" --> 
<-- "config" (middlewares) -->
<-- "routes" -->
<-- "controller" -->
