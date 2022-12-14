const formData = {
    header: {
        title: "Xarial Development Services Quote",
    },
    body: [
        {

            form: [
                {
                    title: "Your email",
                    element: {
                        tag: "input",
                        type: "email",
                        name: "email",
                        placeholder: "Email"
                    }
                },
                {
                    title: "Name",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "name",
                        placeholder: "Name"
                    }
                },
                {
                    title: "Company",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "company",
                        placeholder: "Company"
                    }
                },
                {
                    title: "Country",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "country",
                        placeholder: "Country"
                    }
                },
                {
                    title: "What type of service are you looking for?",
                    typeBlock: 'transition_form',
                    elements: [
                        {
                            tag: "input",
                            type: "radio",
                            name: "service",
                            value: '1',
                            label: "New Product/Macro development"
                        }, {
                            tag: "input",
                            type: "radio",
                            name: "service",
                            value: '2',
                            label: "SOLIDWORKS API consultancy"
                        },
                        {
                            tag: "input",
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
                            tag: "input",
                            type: "radio",
                            name: "application",
                            value: 'VBA Macro',
                            label: "New Product/Macro development"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "application",
                            value: 'Add-in',
                            label: "SOLIDWORKS API consultancy"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "application",
                            value: 'Stand-alone application',
                            label: "Stand-alone application"
                        }, {
                            tag: "input",
                            type: "radio",
                            name: "application",
                            value: 'Not Sure',
                            label: "Not Sure"
                        }
                    ]
                }, {
                    title: "Describe the product you are looking to develop",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "describe",
                        placeholder: "Answer"
                    }
                }, {
                    title: "Will this product be used",
                    elements: [
                        {
                            tag: "input",
                            type: "radio",
                            name: "product",
                            value: 'Internally in the company',
                            label: "Internally in the company"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "product",
                            value: 'Externally (resale)',
                            label: "Externally (resale)"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "product",
                            value: 'Both',
                            label: "Both"
                        }
                    ]
                },
                {

                    title: "Expected product delivery date",
                    element: {
                        tag: "input",
                        type: "date",
                        name: "Expected product delivery date",
                        // placeholder: "Answer"??
                    }
                },
                {
                    title: "Do you have a budget for this service, if so, please specify the range",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "budget",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Get a copy of the answers",
                    element: {
                        tag: "input",
                        type: "checkbox",
                        name: "copy",
                        // placeholder: "Answer"??
                    }
                }
            ]
        },
        {
            subtitle: "Will this product be used",
            form: [
                {
                    title: "Describe the requirements ",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "Describe the requirements",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Do you have a budget for this service, if so, please specify the range",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "Do you have a budget for this service, if so, please specify the range",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Get a copy of the answers",
                    element: {
                        tag: "input",
                        type: "checkbox",
                        name: "copy",
                        // placeholder: "Answer"??
                    }
                }

            ]
        },
        {
            subtitle: "Other service",
            form: [
                {
                    title: "Describe the requirements ",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "Describe the requirements",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Do you have a budget for this service, if so, please specify the range",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "Do you have a budget for this service, if so, please specify the range",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Get a copy of the answers",
                    element: {
                        tag: "input",
                        type: "checkbox",
                        name: "copy",
                        // placeholder: "Answer"??
                    }
                }

            ]
        },


    ],
    footer: {
        buttons: {
            next: "Next",
            back: "Back",
            clear: "Clear Form",
            submit: "Submit"
        }
    },
    modal: {
        title: "Xarial Development Services Quote",
        text: "Thank you for submitting your request. Out team will be in touch with you shortly"
    }
}
