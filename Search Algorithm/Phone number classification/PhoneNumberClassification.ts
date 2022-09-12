function phoneNumberClassification(phones:string){
    // phones.substring(0,2);
    let phoneViettel: string[] = [];
    let phoneMobifone: string[] = [];
    let phoneVinaphone: string[] = [];

    if (phones.substring(0,2) == '03'){
        phoneViettel.push(phones)
        return `Viettel: ${phones}`
    }else if (phones.substring(0,2) == '07'){
        phoneMobifone.push(phones)
        return `Mobifone: ${phones}`
    }else if (phones.substring(0,2) == '08'){
        phoneVinaphone.push(phones)
        return `Vinaphone: ${phones}`
    }
}

console.log(phoneNumberClassification('0353538080'))
console.log(phoneNumberClassification('0735684561'))
console.log(phoneNumberClassification('0835684561'))