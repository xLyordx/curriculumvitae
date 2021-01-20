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
    new Menu("Languages", "Languages", "Languages", "col-lg-1 col-md-1 col-sm-0"),
    new Menu("References", "References", "References", "col-lg-1 col-md-1 col-sm-0")
];

export var perfil = {
    title: "Profile",
    imgSource: "./../../assets/fotohojadevida.jpg",
    description: "Graduated in the Universidad Industrial de Santander, with experience in software development,passionate about programming, clean code, algorithmics and agile methodologies. I have worked in teamgroups, assuming individual and teamresponsibilities. I have excellent interpersonal skills, Great learning ability and interest in professionalupdating, recently I'm updating me about web development"
};

export var educations = [
    new Education("System Engineer",
        "Universidad Industrial de Santander",
        "Bucaramanga",
        "./../../assets/collegeLogo.png",
        "4.06",
        "")
];

export var workExps = [
    new WorkExp(new Date(2017,4,17), new Date(2020,6,31), "SyC S.A", "./../../assets/companyLogo.png", "Software development Engineer, Experience as Back-end developer in .Net (C#, vb.Net, Java) with high Front-end domain inHTML,CSS, JavaScript, jQuery, Ajax, BootStrap. My duties include design and implemententity-relationship models for structuring information, create stored procedures that meetperformance standards inSQL Server, and structure and codify business rules, for the correctflow of requests, support and update a website developed in Java, JDeveloper and WebLogic, and support and update desktop software in windows form.")
];

export var persInfo = {
    id: "C.C. 1098755547",
    idPlaceExp: "Bucaramanga",
    birthDate: "10 June 1994",
    cellphone: "317-684-1810",
    email: "ing.carlosandrespereiragrimald@gmail.com",
    addres: "Cra 2 Cl 6 Urb. Buenos Aires",
    city: "Piedecuesta, Santander",
    ProLic: "68255-357368 STD"
};

export var skills = {
    devSof: ["Microsoft Visual Studio", "Visual Studio Code", "Sql Server Management Studio", "Eclipse", "NetBeans", "JDeveloper Oracle"],
    progLan: ["C#", "C++", "vb.Net", "Java", "Python"],
    front: ["JavaScript", "TypeScript", "HTML", "CSS", "Jquery", "BootStrap", "Ajax", "Angular"],
    back: ["WebForms", "API REST Java", "ExpressJs"],
    packMan: ["Apache Maven", "Node Js"],
    database: ["SqlServer Transact-SQL", "MongoDB", "Postgress", "Mysql", "Sybase"],
    officeTools: ["Microsoft Excel", "Microsoft Word", "Microsoft Power Point"]
};

export var Languages = [
    new Language("English", "B1"),
    new Language("Spanish", "Native")
];

export var References = [
    new Reference("Personal", "Isidro Pereira Morillo","Father", "Home Seller", "","Independent Worker", "3158945775"),
    new Reference("Laboral", "Nelson Enrique Leon", "Coworker","Master’s degree in Systems Engineering","Universidad Industrial de Santander", "SyC S.A","3118705597"),
    new Reference("Laboral", "Sergio Andrés Tovar Durán", "Coworker", "Electronic Engineer", "Universidad Industrial de Santander", "Rockwell Automation" , "3184307473" )
];