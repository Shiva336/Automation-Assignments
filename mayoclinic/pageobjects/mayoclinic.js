const {expect, browser } = require('@wdio/globals')

class mayoClinic {
    constructor() {
        this.url = "https://www.mayoclinic.org/"   
        this.firstName = 'Jon'
        this.lastName = 'Jones'
        this.dob = '10272001'
        this.email = 'shivasundar912@gmail.com'
        this.mobile = '8089715069'
        this.street = '1659 Round Table Drive',
        this.city = 'Butlerville'
        this.zipcode = '45241'
        this.primaryConcern = 'I have a grade 2 meniscus tear in my left knee, which has impacted my mobility and daily activities.'
        this.otherConcern = 'I am concerned about my ability to play sports and train martial arts due to this injury.'
    }

    get healthLibraryButton() {return $("//button[@data-di-id='di-id-b4d01251-4a6a2e57']")}
    get testsAndProceduresButton() {return $("//a[@id='button-583bd2440a']")}
    get gAlphabet() {return $("//a[@id='et_alphaListFilter_G_20136943-81b8-4c30-8505-bd0fc97582e5']")}
    get geneTherapyButton() {return $("//a[text()='Gene therapy']")}
    get requestAppointmentButton() {return $("//a[@id='et_linkAppointment_belowContent']")}
    get newPatientButton() {return $("//h2[text()='New Patients']")}
    get insideUSButton() {return $("//p[text()='Inside of the U.S. (Including U.S. territories)']")}
    get continueButton() {return $("//a[@data-di-id='di-id-37ca0b25-8d9dda01']")}
    get patientButton() {return $("//app-radio-button[@id='pi-is-patient-yes']")}
    get continueToNextQuestion() {return $("//button[@aria-label='Continue to the next question']")}
    get noPreviousCareButton() {return $("//app-radio-button[@id='pi-existing-patient-no']")}
    get firstNameField() {return $("//input[@id='first-name']")}
    get lastNameField() {return $("//input[@id='last-name']")}
    get legalSexField() {return $("//select")}
    get maleOption() {return $("//option[@value='Male']")}
    get dobField() {return $("//input[@id='dob']")}
    get emailField() {return $("//input[@id='piEmail']")}
    get mobileField() {return $("//input[@id='phone_1']")}
    get noInterpreterButton() {return $("//app-radio-button[@id='pi-interpreter-no']")}
    get streetAddressField() {return $("//input[@id='pi-street-address']")}
    get zipcodeField() {return $("//input[@id='pi-zip-code']")}
    get cityField() {return $("//input[@id='pi-city']")}
    get stateField() {return $("//select")}
    get ohioOption() {return $("//option[@value='OH']")} 
    get continueToNextSection() {return $("//button[@aria-label='Complete Section']")}
    get startPrimaryConcernButton() {return $("//button[@aria-label='Start the Primary concern section. Step 2 of 4.']")}
    get primaryConcernTextArea() {return $("//textArea[@id='primary-concern-additional-textarea-field']")}
    get otherConcernTextArea() {return $("//textArea[@id='primary-concern-additional-textarea-field']")}
    get confirmConcernButton() {return $("//app-radio-button[@id='pc-confirm-question-yes']")}
    get continueKneeConcern() {return $("//button[@aria-label='Continue to next question']")}
    get continueConcernButton() {return $("//button[@data-di-id='di-id-504caf76-b73af97d']")}
    get startInsuranceDetailsButton() {return $("//button[@data-di-id='di-id-e6d90798-7476e86e']")}
    get insuranceNoButton() {return $("//app-radio-button[@id='ins-exists-no']")}
    get continueInsurance() {return $("//button[@data-di-id='di-id-d01db512-303960e8']")}
    get workersCompensationNoButton() {return $("//app-radio-button[@id='ins-wc-lc-no']")}
    get completeInsuranceSection() {return $("//button[@data-di-id='di-id-a2269a2f-48952548']")}
    get startWrapUpButton() {return $("//button[@data-di-id='di-id-e6d90798-7476e86e']")}
    get anyLocationButton() {return $("//app-radio-button[@id='call-location-preference-4']")}
    get continueNextQuestion() {return $("//button[@aria-label='Continue to next question']")}
    get noPreviousConditionButton() {return $("//app-radio-button[@id='ada-accommodation-no']")}
    get noPreferenceButton() {return $("//button[@data-di-id='di-id-424ed051-98d61cb0']")}

    async openBrowser() {
        await browser.url(this.url);      
        await browser.maximizeWindow();
    }

    async searchHealthLibrary() {
        await this.healthLibraryButton.waitForDisplayed();
        await this.healthLibraryButton.click();

        await this.testsAndProceduresButton.waitForDisplayed();
        await this.testsAndProceduresButton.click();

        await this.gAlphabet.waitForDisplayed();
        await this.gAlphabet.click();

        await this.geneTherapyButton.waitForDisplayed();
        await this.geneTherapyButton.click();
    }

    async clickRequestAppointment() {
        await this.requestAppointmentButton.waitForDisplayed();
        await this.requestAppointmentButton.scrollIntoView();
        await this.requestAppointmentButton.click();
    }

    async ClickNewPatientButton() {
        await this.newPatientButton.waitForDisplayed();
        await this.newPatientButton.click();
    }

    async clickLivingInsideUSButton() {
        await this.insideUSButton.waitForDisplayed();
        await this.insideUSButton.click();
        await this.continueButton.click();
    }

    async iAmPatientButton() {
        await this.patientButton.waitForDisplayed();
        const element = $("//h1[text()='Are you the patient?']")
        await expect(element).toBeDisplayed();
        await this.patientButton.click();
        await this.continueToNextQuestion.click();
    }

    async recievedCareAtMayoClinic() {
        await this.noPreviousCareButton.waitForDisplayed();
        const element = $("//h1[text()='Have you previously received care at Mayo Clinic?']")
        await expect(element).toBeDisplayed();
        await this.noPreviousCareButton.click();
        await this.continueToNextQuestion.click();
    }

    async enterPatientInformation() {
        await this.firstNameField.waitForDisplayed();
        const element = $("//h1[text()='What’s your legal name?']")
        await expect(element).toBeDisplayed();
        await this.firstNameField.setValue(this.firstName);
        await this.lastNameField.setValue(this.lastName);
        await this.continueToNextQuestion.click();
    }

    async enterDobAndSex() {
        await this.legalSexField.waitForDisplayed();
        await this.legalSexField.click();
        await this.maleOption.click();

        await this.dobField.click();
        await this.dobField.setValue(this.dob)
        await this.continueToNextQuestion.click();
    }

    async provideContactInfo() {
        await this.emailField.waitForDisplayed();
        await this.emailField.setValue(this.email);
        await this.mobileField.setValue(this.mobile);
        await this.continueToNextQuestion.click();
    }

    async selectNoInterpreter() {
        await this.noInterpreterButton.waitForDisplayed();
        await this.noInterpreterButton.click();
        await this.continueToNextQuestion.click();
    }

    async enterHomeAddress() {
        await this.streetAddressField.waitForDisplayed();
        await this.streetAddressField.setValue(this.street);
        await this.cityField.setValue(this.city);
        await this.stateField.click();
        await this.ohioOption.click();
        await this.zipcodeField.setValue(this.zipcode);
        await this.continueToNextSection.click();

        await this.startPrimaryConcernButton.waitForDisplayed();
        await this.startPrimaryConcernButton.click();
    }

    async enterPrimaryConcern() {
        await this.primaryConcernTextArea.waitForDisplayed();
        await this.primaryConcernTextArea.setValue(this.primaryConcern);
        await this.continueToNextQuestion.click();
    }

    async enterOtherConcernAndConfirm() {
        await this.otherConcernTextArea.waitForDisplayed();
        await this.otherConcernTextArea.setValue(this.primaryConcern);
        await this.continueToNextSection.click();

        await this.confirmConcernButton.waitForDisplayed();
        await this.confirmConcernButton.click();
        await this.continueKneeConcern.click();

        await this.continueConcernButton.waitForDisplayed();
        await this.continueConcernButton.click();

        await this.startInsuranceDetailsButton.waitForDisplayed();
        await this.startInsuranceDetailsButton.click();
    }

    async clickYesHealthInsurance() {
        await this.insuranceNoButton.waitForDisplayed();
        await this.insuranceNoButton.click();

        await this.continueToNextQuestion.waitForDisplayed();
        await this.continueToNextQuestion.click();

        await this.continueInsurance.waitForDisplayed();
        await this.continueInsurance.click();
    }

    async clickNoWorkersCompensation() {
        await this.workersCompensationNoButton.waitForDisplayed();
        await this.workersCompensationNoButton.click();

        await this.completeInsuranceSection.waitForDisplayed();
        await this.completeInsuranceSection.click();
    }

    async submitRequest() {
        await this.startWrapUpButton.waitForDisplayed();
        await this.startWrapUpButton.click();

        await this.anyLocationButton.waitForDisplayed();
        await this.anyLocationButton.click();

        await this.continueNextQuestion.waitForDisplayed();
        await this.continueNextQuestion.click();

        await this.noPreviousConditionButton.waitForDisplayed();
        await this.noPreviousConditionButton.click();

        await this.continueNextQuestion.waitForDisplayed();
        await this.continueNextQuestion.click();

        await this.noPreferenceButton.waitForDisplayed();
        await this.noPreferenceButton.click();

        await this.continueToNextSection.waitForDisplayed();
        await this.continueToNextSection.click();
    }
}

export default new mayoClinic();
