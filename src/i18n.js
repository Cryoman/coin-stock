import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'ru',
    messages: {
        ru: {
            greeting: 'Здравствуйте,',
            login: 'Вход',
            register: 'Регистрация',
            logout: 'Выйти',
            assets: 'Активы',
            balance: 'Баланс',
            descHeader: 'Проверьте свои навыки в торговле на бирже',
            desc: 'Покупайте и продавай валюту, используя виртуальный счет на своем аккаунте, и узнайте, какую прибыль Вы сможете получить!',
            asset: "Актив",
            price: 'Цена',
            dynamic: 'Динамика',
            buyCoins: 'Купить монеты',
            buyButton: 'Купить',
            yourAssets: 'Ваши активы',
            total: 'Общая сумма активов',
            sellButton: 'Продать'
        },
        en: {
            greeting: 'Hello,',
            login: 'Sign-in',
            register: 'Sign-up',
            logout: 'Sign-out',
            assets: 'Assets',
            balance: 'Balance',
            descHeader: 'Check your trading skills',
            desc: 'Use your own virtual bank account for buying and selling coins for real-time ratio and find out how much profit you\'ll be able to get!',
            asset: 'Asset',
            price: 'Price',
            dynamic: 'Dynamic',
            buyCoins: 'Buy coins',
            buyButton: 'Buy',
            yourAssets: 'Your assets',
            total: 'Total assets sum',
            sellButton: 'Sell'
        }
    }
})
