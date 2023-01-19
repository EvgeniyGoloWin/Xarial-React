export const mockData = {
    header: {
        title: "Xarial Development Services Quote",
    },
    body: [
        {
            form: [
                {
                    element: {
                        title: "Your email",
                        type: "email",
                        name: "email",
                        placeholder: "Email"
                    }
                },
                {
                    element: {
                        title: "Name",
                        type: "text",
                        name: "name",
                        placeholder: "Name"
                    }
                },
                {
                    element: {
                        title: "Company",
                        type: "text",
                        name: "company",
                        placeholder: "Company"
                    }
                },
                {
                    element: {
                        title: "Country",
                        type: "text",
                        name: "country",
                        placeholder: "Country"
                    }
                },
                {
                    title: "What type of service are you looking for?",
                    elements: [
                        {
                            type: "radio",
                            name: "service",
                            value: '1',
                            label: "New Product/Macro development"
                        }, {
                            type: "radio",
                            name: "service",
                            value: '2',
                            label: "SOLIDWORKS API consultancy"
                        },
                        {
                            type: "radio",
                            name: "service",
                            value: '3',
                            label: "Other"
                        }]
                }
            ]
        },
        {
            subtitle: "SOLIDWORKS API Consultancy",
            form: [
                {
                    title: "What type of application do you want to develop?",
                    elements: [
                        {
                            type: "radio",
                            name: "application",
                            value: 'VBA Macro',
                            label: "New Product/Macro development"
                        },
                        {
                            type: "radio",
                            name: "application",
                            value: 'Add-in',
                            label: "SOLIDWORKS API consultancy"
                        },
                        {
                            type: "radio",
                            name: "application",
                            value: 'Stand-alone application',
                            label: "Stand-alone application"
                        }, {
                            type: "radio",
                            name: "application",
                            value: 'Not Sure',
                            label: "Not Sure"
                        }
                    ]
                },
                {
                    element: {
                        title: "Describe the product you are looking to develop",
                        type: "text",
                        name: "describe",
                        placeholder: "Answer"
                    }
                }, {
                    title: "Will this product be used",
                    elements: [
                        {
                            type: "radio",
                            name: "product",
                            value: 'Internally in the company',
                            label: "Internally in the company"
                        },
                        {
                            type: "radio",
                            name: "product",
                            value: 'Externally (resale)',
                            label: "Externally (resale)"
                        },
                        {
                            type: "radio",
                            name: "product",
                            value: 'Both',
                            label: "Both"
                        }
                    ]
                },
                {
                    element: {
                        title: "Expected product delivery date",
                        type: "date",
                        name: "Expected product delivery date",
                    }
                },
                {
                    element: {
                        title: "Do you have a budget for this service, if so, please specify the range",
                        type: "text",
                        name: "budget",
                        placeholder: "Answer"
                    }
                },
                {
                    element: {
                        title: "Get a copy of the answers",
                        type: "checkbox",
                        name: "copy",
                    }
                }
            ]
        },
        {
            subtitle: "Will this product be used",
            form: [
                {
                    element: {
                        title: "Describe the requirements ",
                        type: "text",
                        name: "Describe the requirements",
                        placeholder: "Answer"
                    }
                },
                {

                    element: {
                        title: "Do you have a budget for this service, if so, please specify the range",
                        type: "text",
                        name: "Do you have a budget for this service, if so, please specify the range",
                        placeholder: "Answer"
                    }
                },
                {
                    element: {
                        title: "Get a copy of the answers",
                        type: "checkbox",
                        name: "copy",
                    }
                }

            ]
        },
        {
            subtitle: "Other service",
            form: [
                {
                    element: {
                        title: "Describe the requirements ",
                        type: "text",
                        name: "Describe the requirements",
                        placeholder: "Answer"
                    }
                },
                {
                    element: {
                        title: "Do you have a budget for this service, if so, please specify the range",
                        type: "text",
                        name: "Do you have a budget for this service, if so, please specify the range",
                        placeholder: "Answer"
                    }
                },
                {
                    element: {
                        title: "Get a copy of the answers",
                        type: "checkbox",
                        name: "copy",
                    }
                }

            ]
        },


    ],
    footer: {
        mainText: "© 2022 Xarial Pty Limited. All rights reserved.",
        mailLink: "info@xarial.com",
        phoneLink: "+61 435 577 927",
        address: "PO BOX 1163, Dee Why, NSW, 2099",
        abn: "46 638 294 649",
        termsLink: "https://xarial.com/terms-of-use/",
        privacyLink: "https://xarial.com/privacy-policy/",
        cookiesLink: "https://xarial.com/cookies-policy/"
    },
    buttons: {
        next: "Next",
        back: "Back",
        clear: "Clear Form",
        submit: "Submit"
    },
    modal: {
        title: "Xarial Development Services Quote",
        text: "Thank you for submitting your request. Out team will be in touch with you shortly"
    }
}
