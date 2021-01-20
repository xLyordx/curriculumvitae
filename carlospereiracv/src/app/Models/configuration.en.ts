import { WorkExp } from './WorkExp';
import { Education } from './Education';

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

