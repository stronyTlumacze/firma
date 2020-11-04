import { i18n } from '../i18n'
import { useContext } from 'react'
import { I18nContext } from 'next-i18next'

function LanguageSwitcher() {
    const { i18n: { language } } = useContext(I18nContext)

    return(
        <div className='flag'>
            <img src='./favicon.ico' alt='polish flag' type="button" onClick={() => i18n.changeLanguage('pl')} className={language === 'pl' ? 'is-active': ''} />
            <img src='./favicon.ico' alt='english flag' type="button" onClick={() => i18n.changeLanguage('en')} className={language === 'en' ? 'is-active': ''} />
        </div>
    )
}


export default LanguageSwitcher
