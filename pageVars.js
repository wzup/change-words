'use strict';

/**
 * Переменные словаря на странице /index b и вообще на всех
 * Убрал из routes.js
 */

const config = require('../config');
const i18n = require('./i18n')[config.defaultLocale];
const NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
    // title: config.titles.index,
    // page: 'index',
    PAGEVARS: "PAGEVARS",
    regWith: i18n.regWith,
    facebook: i18n.facebook,
    paypal: i18n.paypal,
    or: i18n.or,
    fname: i18n.fname,
    lname: i18n.lname,
    emailAddress: i18n.emailAddress,
    password: i18n.password,
    byRegistering: i18n.byRegistering,
    nobacklogs: i18n.nobacklogs,
    termsAndConditions: i18n.termsAndConditions,
    and: i18n.and,
    privatePolicy: i18n.privatePolicy,
    register: i18n.register,
    alreadyHaveAccount: i18n.alreadyHaveAccount,
    dontHaveAccount: i18n.dontHaveAccount,
    login: i18n.login,
    logout: i18n.logout,
    welcomeBack: i18n.welcomeBack,
    forgottenPassword: i18n.forgottenPassword,
    loginWith: i18n.loginWith,
    signup: i18n.signup,
    orderVideo: i18n.orderVideo,
    fbSdk: config[NODE_ENV].fbSdk, // разный урл сдк для тега <script>: для дев и для прода
    dev: NODE_ENV == 'development' ? true : false, // для dust и вообще. Если dev==true, рендерю какие-то элементы тестировать
    accDetails: i18n.accDetails,
    howItWorks: i18n.howItWorks,
    pricing: i18n.pricing,
    theTeam: i18n.theTeam,
    contact: i18n.contact,
    submitOrder: i18n.submitOrder,
    companyDetails: i18n.companyDetails,
    orderHistory: i18n.orderHistory,
    orderProgress: i18n.orderProgress,
    payments: i18n.payments,
    loyaltyDiscount: i18n.loyaltyDiscount,
    trackHardDrive: i18n.trackHardDrive,
    signout: i18n.signout,
    myCurrentOrder: i18n.myCurrentOrder,
    makePayment: i18n.makePayment,
    invoice: i18n.invoice,
    viewOrder: i18n.viewOrder,
    noCurrentOrders: i18n.noCurrentOrders,
    myRecentActivity: i18n.myRecentActivity,
    seeAll: i18n.seeAll,
    outstandingPayments: i18n.outstandingPayments,
    hardDriveShipment: i18n.hardDriveShipment,
    currentStatus: i18n.currentStatus,
    standardMember: i18n.standardMember,
    maintainL10: i18n.maintainL10,
    upgradeToL15: i18n.upgradeToL15,
    reviewDate: i18n.reviewDate,
    pointsEarnedSince: i18n.pointsEarnedSince,
    pointsRequiredToMaintainBy: i18n.pointsRequiredToMaintainBy,
    pointsRequiredToUpgradeTo: i18n.pointsRequiredToUpgradeTo,
    pointsRequiredToUpgradeTo: i18n.pointsRequiredToUpgradeTo,
    usd: i18n.usd,
    isEquals: i18n.isEquals,
    creditPoint: i18n.creditPoint,
    clickHereViewLatestActivities: i18n.clickHereViewLatestActivities,
    howToOrder: i18n.howToOrder,
    wantExtendCurrentVisa: i18n.wantExtendCurrentVisa,
    wantSponsorLetter: i18n.wantSponsorLetter,
    selectOption: i18n.selectOption,
};
