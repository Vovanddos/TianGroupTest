import {
    dropdown,
    menu,
    slider,

} from './components'
dropdown()
menu()
slider()

// подгрузка скрипта относительно шаблона
if (typeof pageName !== 'undefined') {
    try {
        require(`./pages/${pageName}`);
    } catch(e) {
        if (e.message.indexOf('Cannot find module') < 0) {
            console.error(e);
        }
    }
}


