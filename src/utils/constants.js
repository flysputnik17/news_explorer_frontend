const APIkey = "f70c070134b4424f93001cea21cc05c0";
let to = new Date().toISOString().slice(0, 10);
let from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const pageSize = 100;

export { APIkey, to, from, pageSize };

const headerStyle = "header";
const headerStyleSaved = "header__saved";
const headerButtons = "header__buttons";
const headerTitle = "header__title";
const headerTitleBlack = "header__title-black";
const headerLogut = "header__logout";
const headerLogutBlack = "header__logout-black";
const headerButtonHome = "header__buttons-homeButton";
const headerButtonHomeBlack = "header__buttons-homeButton-black";
const headerButtonHomeModWhite = "header__buttons-homeButton-mod-wihte";
const headerButtonHomeModBlack = "header__buttons-homeButton-mod-black";

export {
  headerStyle,
  headerStyleSaved,
  headerButtons,
  headerTitle,
  headerTitleBlack,
  headerLogut,
  headerLogutBlack,
  headerButtonHome,
  headerButtonHomeBlack,
  headerButtonHomeModWhite,
  headerButtonHomeModBlack,
};

export const baseUrl = "http://localhost:3001";
