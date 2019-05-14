<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Home Loan Design Wizard
### Project Requirements
#### Version 1.4

## Introduction

### Purpose

<details>

  <summary>The purpose of the Home Loan Wizard...</summary> is to generate leads for the appropriate parties in the real estate market.  It will gather information about prospective customers, including contact information, and route appropriately.

</details>

### Scope

<details>
  <summary>The scope of the project is to create...</summary> a gated form that will ask appropriate and applicable questions and then a back end that will send the lead to the designated parties.
</details>

## Description

### Interfaces

<details>
  <summary>An interface will need to be created...</summary> to communicate between the form and the lenders' own systems, with all the information provided by the customer as well as a tag indicating the department for whom the report is intended.
</details>

### Environment

<details>
  <summary>The form is a web application...</summary> that should also function completely in a mobile browser.  The latest versions of Chrome, Firefox, Microsoft Edge, and Safari will be supported.
</details>

### User Characteristics

<details>
  <summary>The typical user of this web form is expected...</summary> to be an individual without much tech savvy, so the user interface should be very simple.

  As for the user on the lenders' side, they will have lots of technical acumen, and the interface need only be developed to the standards they provided, sending the information they requested in the format provided.  They will take care of the rest.
</details>

## Requirements

### External Interfaces

<details>
  <summary>The interface with the lenders' system...</summary> should create an XML document that will be sent to an IP address and port that will be provided later.  However, the information should be in the following format:

  ```xml
    <customer>
      <name>Jane Doe</name>
      <email>jane.doe@gmail.com</email>
      <loan>Refinance</loan>
      <property>Town Home</property>
      <city>New York City, New York</city>
      <type>Secondary Home</type>
      <found>False</found>
      <agent>True</agent>
      <price>$500,000</price>
      <down>$100,000</down>
      <credit>Excellent</credit>
      <bankruptcy>True</credit>
      <foreclosure>False</credit>
      <address-1>341 S Main St</address-1>
      <address-2>Ste 100</address-2>
      <address-3>Salt Lake City, UT 84111</address-3>
    </customer>
  ```

  The generation of this XML will be worked on AFTER the form's functionality has been checked and verified.

</details>

### Functions

<details>
  <summary>The form will be broken into several screens for ease of use.</summary>

  1. The welcome screen
    * This screen will have the name of the wizard and a button to start the process of generating the lead.
  2. Loan and property type query screen
    * This screen will require a description of the type of loan requested, as well as the type of property the loan will service.
    * Acceptable values for type of home loan include:
      * Home Purchase
      * Refinance
      * Home Equity Loan/Line of Credit
    * Acceptable values for type of property include:
      * Single Family Home
      * Town Home
      * Condo
      * Multi Family Dwelling
      * Mobile Home
  3. Property location screen
    * This screen will request from the user the city in which their desired property is located.
  4. Property purchase screen
    * This screen will discover how the property will be utilized by the customer
    * Acceptable values include:
      * Primary Home
      * Rental Property
      * Secondary Home
  5. Property discovered screen
    * This screen will inquire as to whether the user has already found the property the loan will service.
  6. Agent discovered screen
    * This screen will inquire as to whether the user has a real estate agent with whom they are working.
  7. Price estimation screen
    * This screen will require an estimate for both the purchase price and available down payment amount.
    * Acceptable values include any dollar formatted amount for both data points.
       * $1000.00
       * 1000.00
       * $1000
       * 1000
  8. Credit score estimation
    * This screen will request an estimate of the user's credit score.
    * Acceptable values include:
      * Excellent
      * Good
      * Fair
      * Poor
  9. Bankruptcy / foreclosure info request screen
    * This screen will request the user's bankruptcy and foreclosure history in the last 7 years.
    * Acceptable responses include:
      * No
      * Bankruptcy
      * Foreclosure
      * Both
  10. Current address request screen
    * This screen is to check the user's current address
    * The response should be first line: street address, second line: street address cont'd, third line: city, state, and zip.
  11. User information request screen
    * This screen will get contact information from the user
    * Acceptable responses include:
      * First Name - free text entry
      * Last Name - free text entry
      * email - verified email entry
        * x@x.x where 'x' can be any number of letters/numbers
  12. Summary screen
    * This screen will show the user an overview of the information provided, and will allow them to submit the report, or to star the form over.

  Once the submit button is selected, the form will be sent to the lenders' server for appropriate distribution within their systems, and a summary of that distribution will be displayed.
</details>

### Distribution Rules

<details>
  <summary>On submission, routing is determined...</summary> using the following rules.
  1. If the loan is for purchasing a primary home, Steve will handle it.
  2. To handle a purchase of a secondary or rental property, Jan will take care of them.
  3. For HELOC or Refinance purposes, route the customer to the corporate lending offices.
  4. For any multi-family dwelling, have our business banker Mike contact the customer, and provide his info.
  5. If the customer has Fair or Poor credit, OR has a bankruptcy or foreclosure, reject the application out of hand.
  6. If the customer has both a bankruptcy and a foreclosure, provide the email for our financial counselling services.
  7. For any cash purchases, route to Stella, and for any down payment of $250k or higher, loop in Melissa.
</details>

### Performance Requirements

<details>
  <summary>The page should load...</summary> in no longer than 3 seconds, and page transitions should take no longer th an 2 seconds, with 1 and 2 being the target and minimum thresholds respectively.
</details>

## Project Stakeholders

### Development

<details>
  <summary>
  Team members
  </summary>

  Development Manager: Bob

  Developer: Jack

  Developer: Diane
</details>

### Design

<details>
<summary>Team members</summary>

  Designer: Jackie
</details>

### Quality Assurance

<details>
<summary>Team members</summary>

  Team lead: Anne
  Analyst: Frank
</details>

### Industry Partners

<details>
<summary>Partners</summary>

  Lender: Mac
  Underwriter: Millie
  Agent: Marlene
</details>


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2018. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
