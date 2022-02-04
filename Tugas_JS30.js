function regex(data) {
    let str = /[es]/g;
    return data.match(str);
}
console.log(regex("Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat"));