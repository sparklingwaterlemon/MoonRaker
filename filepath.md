    
INDEX.JS
|
|___ERRORPAGE
|___ABOUTPAGE
|
|___APP
|   |___PreLoadImagesFunc   
|   |___BackgroundComponent
|   |___MoonSection (Date&Moonphase -to-> "ASideDatePhase")
|   |___DuaLipa
|   |___AboutLinkComponent  (Link to "ABOUTPAGE")
|   |___FormSection
|   |   |___PortalLinkComponent (Link to "PORTAL")
|   |   |___SearchBarComponent  (Client-Side API Calls)
|   |                           (Weather & Astro -to-> "BSideWeatherAstro")
|   |___FlipDisplaySection
|   |   |___ASideDatePhase
|   |   |___BSideWeatherAstro
|   |
|   |___ConstructionDisplay
|   |___SettingScrollFunc
|   |___SpikingScrollFun
|   
|   
|___PORTAL
    |___AuthPage
    |   |___SignUpForm 
    |   |___SignInForm
    |
    |___JournalPage
        |___PortalNavBar
            |___LogOut
        |___SideBar
        |___JournalEntry
        |___NewEntry


AJAX Request Path Client to Server:
<-- "src/pages/Portal/utilities/users-services.js" --> 
<-- "./users-api.js" --> 
<-- "server.js" --> 
<-- "config" (middlewares) -->
<-- "routes" -->
<-- "controller" -->
