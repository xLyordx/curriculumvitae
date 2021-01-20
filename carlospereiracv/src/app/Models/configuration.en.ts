import { WorkExp } from './WorkExp';
import { Education } from './Education';
import { Menu} from  './Menu';

export var menus = [
    new Menu("Home","Profile","Profile","col-lg-1 col-md-1 col-sm-0"),
    new Menu("Education","Education","Education","col-lg-1 col-md-1 col-sm-0"),
    new Menu("WorkExp","Work Experience","Work Experience","col-lg-1 col-md-1 col-sm-0"),
    new Menu("PersInfo","Personal Info","Personal Info","col-lg-1 col-md-1 col-sm-0"),
    new Menu("Languages","Languages","Languages","col-lg-1 col-md-1 col-sm-0"),
    new Menu("References","References","References","col-lg-1 col-md-1 col-sm-0")
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
    new WorkExp(new Date, new Date, "", "./../../assets/companyLogo.png", "")
];

export var persInfo = {
    id : "C.C. 1098755547",
    idPlaceExp : "Bucaramanga",
    birthDate: "10 June 1994",
    cellphone: "317-684-1810",
    email: "ing.carlosandrespereiragrimald@gmail.com",
    addres: "Cra 2 Cl 6 Urb. Buenos Aires",
    city: "Piedecuesta, Santander",
    ProLic: "68255-357368 STD"


}