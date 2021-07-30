import { NONAME } from "dns";
/// npm install --save object-assign
////npm install --save deep-assign
const initstate = {
    goodId: {
        id: "***",
        mahal: "***",
        price: "***",
        shahr: "***",
        berand: "***",
        useLong: "***",
        autoType: "***",
        subject:"***",
    },

    city: "تهران",
    currentSection: "همه",
    searchValue: "",
    demandValue: "فرقی نمیکند",
    neighborValue: "همه",
    paymentValue: "فرقی نمیکند",

    priceDownValue: "",
    priceUpValue: "",

    brandvalue: "همه",

    modelDownValue: "",
    modelUpValue: "",

    usedDownValue: "",
    usedUpValue: "",
    filter: {
        city: "تهران",
        brand: "همه",
        cata: "همه",
        modelDown: "",
        modelUp: "",
        neibor: "همه",
        price: "فرقی نمیکند",
        pricedown: "",
        priceup: "",
        search: "",
        type: "فرقی نمیکند",
        usedDown: "",
        usedUp: ""
    },
}

const rootReducer = (state = initstate, action) => {
    if (action.type === "CITY_CHANGE") {
        let NewCity = action.citys;
        return {
            ...state,
            city: NewCity
        }
    }
    if (action.type === "CATA_CHANGE") {
        let NewCata = action.currentSections;
        return {
            ...state,
            currentSection: NewCata
        }
    }
    if (action.type === "SEARCH_VALUE") {
        let NewSearchValue = action.searchValue;
        return {
            ...state,
            searchValue: NewSearchValue
        }
    }
    if (action.type === "DEMAND_VALUE") {
        let NewDemandValue = action.demanValue;
        return {
            ...state,
            demandValue: NewDemandValue
        }
    }
    if (action.type === "NEIGHBOR_VALUE") {
        let NewNeighborValue = action.neighborValue;
        return {
            ...state,
            neighborValue: NewNeighborValue
        }
    }
    if (action.type === "PAYMENT_VALUE") {
        let Newpayment = action.paymentVale;
        return {
            ...state,
            paymentValue: Newpayment
        }
    }
    if (action.type === "PRICE_UP_VALUE") {
        let NewPriceUpVale = action.PriceUpVale;
        return {
            ...state,
            priceUpValue: NewPriceUpVale
        }
    }
    if (action.type === "PRICE_DOWN_VALUE") {
        let NewPriceDownVale = action.PriceDownVale;
        return {
            ...state,
            priceDownValue: NewPriceDownVale
        }
    }
    if (action.type === "BRAND_VALUE") {
        let NewBrandValue = action.brandval;

        return {
            ...state,
            brandvalue: NewBrandValue
        }
    }
    if (action.type === "MODEL_UP_RANGE") {
        let NewValue = action.UpModel;
        return {
            ...state,
            modelUpValue: NewValue
        }
    }
    if (action.type === "MODEL_DOWN_RANGE") {
        let NewValue = action.DownModel;
        return {
            ...state,
            modelDownValue: NewValue
        }
    }
    if (action.type === "USED_UP_RANGE") {
        let NewValue = action.UpUsed;
        return {
            ...state,
            usedUpValue: NewValue
        }
    }
    if (action.type === "USED_DOWN_RANGE") {
        let NewValue = action.DownUsed;
        return {
            ...state,
            usedDownValue: NewValue
        }
    }

    if (action.type === "SUBMIT_CHANGE") {
        let NewValue = action.filterSub;
        return {
            ...state, filter: NewValue
        }
    }
    if (action.type === "GOODINFO_ID") {
        let NewValue = action.goodId;
        // console.log(action.goodId);
        return {
            ...state, goodId: NewValue
        }
    }
    ///////////////////////////////////////                 type: "SUBMIT_CHANGE", search: search, cata: cata, neibor: neibor, price: price, priceup: priceup, pricedown: pricedown,
    // brand: brand, type: type, modelUp: modelUp, modelDown: modelDown, usedUp: usedUp, usedDown: usedDown


    // if (action.type === "PAGE_CHANGE") {
    //     let newPage = action.currentpageNumber;
    //     return {
    //         ...state,
    //         currentpageNumber: newPage
    //     }

    // }
    // if (action.type === "BASKET_ADD") {
    //     let newbasketitem = [...state.basketItemss, { id: action.basketIt, Name: action.basketNa }];
    //     return {
    //         ...state,
    //         basketItemss: newbasketitem
    //     }

    // }
    // if (action.type === "BASKET_DEL") {
    //     const newbasketitem = [...state.basketItemss.filter(item => item.id !== action.basketIt)];
    //     //let newbasketitem = [...state.basketItemss, { id: action.basketIt, Name: action.basketNa }];
    //     return {
    //         ...state,
    //         basketItemss: newbasketitem
    //     }

    // }
    // if (action.type === "BASKET_DEL") {
    //     const newbasketitem = [...state.basketItemss.filter(item => item.id !== action.basketIt)];
    //     //let newbasketitem = [...state.basketItemss, { id: action.basketIt, Name: action.basketNa }];
    //     return {
    //         ...state,
    //         basketItemss: newbasketitem
    //     }

    // }

    // ///////////////////////

    // if (action.type === "CHANGE_PG") {
    //     let newNumsp = action.pageNumber;
    //     return {
    //         ...state,
    //         pageNumber: newNumsp.cata
    //     }

    // }
    // if (action.type === "ADD_TO_BASKET") {
    //     const basket = [...state.basket, { item: action.basket }];

    //     return {
    //         ...state,
    //         basket
    //     }

    // }
    // if (action.type === "DEL_TO_BASKET") {
    //     // const basket = [...state.basket, { item: action.basket }];

    //     // return {
    //     //     ...state,
    //     //     basket
    //     // }
    //     console.log("beforeDelet", state.basket)
    //     const basket = [...state.basket.filter(item => item.item.id !== action.basket)];
    //     console.log("After", basket)

    //     return {
    //         ...state,
    //         basket
    //     }
    // }
    return state;
}
export default rootReducer;