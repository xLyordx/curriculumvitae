import { WorkExp } from './WorkExp';
import { Education } from './Education';
import { Menu } from './Menu';
import { Language } from './Language';
import { Reference } from './Reference';

export var menus = [
    new Menu("Home", "Profile", "Profile", "col-lg-1 col-md-1 col-sm-0"),
    new Menu("Education", "Education", "Education", "col-lg-1 col-md-1 col-sm-0"),
    new Menu("WorkExp", "Work Experience", "Work Experience", "col-lg-1 col-md-1 col-sm-0"),
    new Menu("PersInfo", "Personal Info", "Personal Info", "col-lg-1 col-md-1 col-sm-0"),
    new Menu("Skills", "Skills", "Skills", "col-lg-1 col-md-1 col-sm-0"),
    new Menu("Languages", "Languages", "Languages", "col-lg-1 col-md-1 col-sm-0"),
    new Menu("References", "References", "References", "col-lg-1 col-md-1 col-sm-0"),
    new Menu("Annexes", "Annexes", "Annexes", "col-lg-1 col-md-1 col-sm-0")
];

export var perfil = {
    title: "Profile",
    imgSource: "./../../assets/fotohojadevida.jpg",
    description: "Graduated from Universidad Industrial de Santander, with experience in software development, passionate about programming, clean code, algorithmics and agile methodologies. I have worked in teamgroups, assuming individual and teamresponsibilities. I have excellent interpersonal skills, Great learning ability and interest in professionalupdating, recently I'm updating me about web development"
};

export var educations = [
    new Education("System Engineer",
        "Universidad Industrial de Santander",
        "Bucaramanga",
        "./../../assets/collegeLogo.png",
        "4.06",
        "",
        "2012",
        "2017")
];

export var workExps = [
    new WorkExp(new Date(2020,6,1), new Date(2020,8,30), "Functional Android App Prototype for manage client information as <b>Freelance</b>", "", "Experience as mobile developer in <b>Android studio</b> focus in create an APP prototype to show how can be manage client information using a simple smartphone."),
    new WorkExp(new Date(2017,3,17), new Date(2020,5,30), "Software development Engineer at <b>SyC S.A</b>", "./../../assets/companyLogo.png", "Experience as Back-end developer in <strong>.Net (C#, vb.Net) and Java</strong> with high Front-end domain in <b>HTML,CSS, JavaScript,TypeScript Poo, jQuery, Ajax, BootStrap</b>. My duties include design and implemententity-relationship models for structuring information, create stored procedures that meet performance standards in SQL Server, and structure and codify business rules, for the correct flow of requests, support and update a website developed in <b>Java, JDeveloper and WebLogic as BackEnd</b>, and support and update desktop software in <b>Windows Form</b> for automatic processes deployed over virtual machine."),
    new WorkExp(new Date(2017,4,17), new Date(2020,6,31), "Integrated multi-service extensible cloud platform for supporting value added information for urban transportation service based on B.R.T. (Bus Rapid Transit) at <b>Universidad Industrial de Santander</b>", "./../../assets/collegeLogo.png", "Experience as Back-end developer using <b>Java</b> focus in create a service <b>RestFull</b> to manage, processes and produce information using geo-reference information of traffic produced by a B.R.T."),
];

export var persInfo = {
    id: "C.C. 1098755547",
    idPlaceExp: "Bucaramanga",
    birthDate: "10 June 1994",
    cellphone: "317-684-1810",
    email: "ing.carlosandrespereiragrimald@gmail.com",
    address: "Cra 2 Cl 6 Urb. Buenos Aires Mz H house 16",
    city: "Piedecuesta, Santander",
    proLic: "68255-357368 STD"
};

export var skills = {
    devSof: ["Microsoft Visual Studio", "Visual Studio Code With SSH Remote Station", "Sql Server Management Studio", "Eclipse", "NetBeans","Android Studio", "JDeveloper Oracle","Node.js"],
    progLan: ["C#", "C++", "vb.Net", "Java", "Python","Kotlin"],
    front: ["JavaScript", "TypeScript", "HTML", "CSS", "Jquery", "BootStrap", "Ajax", "Angular"],
    back: ["WebForms", "API REST Java", "ExpressJs"],
    packMan: ["Apache Maven", "NPM", "Nuget"],
    database: ["SqlServer Transact-SQL", "MongoDB", "Postgress", "Mysql", "Sybase"],
    cidi: ["Git","DevOps","Jersey","Team Foundation Control Versión"],
    officeTools: ["Microsoft Excel", "Microsoft Word", "Microsoft Power Point"]
};

export var Languages = [
    new Language("English", "B2"),
    new Language("Spanish", "Native")
];

export var References = [
    new Reference("Personal", "Isidro Pereira Morillo","Father", "Home Seller", "","Independent Worker", "3158945775"),
    new Reference("Laboral", "Nelson Enrique Leon", "Coworker","Master’s degree in Systems Engineering","Universidad Industrial de Santander", "SyC S.A","3118705597"),
    new Reference("Laboral", "Sergio Andrés Tovar Durán", "Coworker", "Electronic Engineer", "Universidad Industrial de Santander", "Rockwell Automation" , "3184307473" )
];