function phoneNumberClassification(phones) {
    // phones.substring(0,2);
    var phoneViettel = [];
    var phoneMobifone = [];
    var phoneVinaphone = [];
    if (phones.substring(0, 2) == '03') {
        phoneViettel.push(phones);
        return "Viettel: ".concat(phones);
    }
    else if (phones.substring(0, 2) == '07') {
        phoneMobifone.push(phones);
        return "Mobifone: ".concat(phones);
    }
    else if (phones.substring(0, 2) == '08') {
        phoneVinaphone.push(phones);
        return "Vinaphone: ".concat(phones);
    }
}
console.log(phoneNumberClassification('0353538080'));
console.log(phoneNumberClassification('0735684561'));
console.log(phoneNumberClassification('0835684561'));
