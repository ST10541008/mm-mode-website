# My Work Profile

## Module Name: WEB DEVELOPMENT

## Module Code: WEDE5020

## Student Number: ST10541008

## Student Name: NOELLA MONGA MBUYA

---

# MM MODE – Part 3: Enhancing Functionality and SEO

## Project Overview

MM MODE is a modern South African fashion website developed for the WEDE5020 Web Development assignment.

The website represents a South African clothing and footwear brand offering affordable and stylish fashion for different occasions.

Part 3 builds on the improvements made in Part 2 by introducing JavaScript functionality, interactive elements, form validation, search and sorting features, an image lightbox gallery, an interactive map, shopping cart functionality, and search engine optimisation (SEO).

The website includes seven main pages:

* Home
* About
* Product
* Enquiry
* Contact
* Cart
* Receipt

## Student Information

* **Student Name:** Noella Monga Mbuya
* **Student Number:** ST10541008
* **Module:** Web Development
* **Module Code:** WEDE5020
* **Project:** MM MODE – Part 3: Enhancing Functionality and SEO


# Website Pages

## 1. Home Page

The Home page introduces MM MODE and provides the main brand message:

> **Fashion That Defines You**

The page also includes:

* Brand introduction
* Hero image
* Shop Now button
* Featured products
* About section
* Call-to-action section
* Navigation menu
* Footer and social media links

The hero section was improved so that the text and button are positioned correctly and remain responsive on different screen sizes.



## 2. About Page

The About page provides information about MM MODE and the purpose of the business.

It includes:

* Company story
* Mission
* Vision
* Company values
* Brand information
* Supporting images
* Call-to-action banner
* Footer

The page was styled to match the overall MM MODE design and maintain consistency with the other pages.



## 3. Product Page

The Product page displays the clothing and footwear products available from MM MODE.

The page uses a responsive product grid.

On desktop screens, the products are displayed in:

* 3 columns
* 4 rows
* 12 products

The page also includes pagination for navigating between product pages.

The product images were adjusted using CSS so that the complete products can be displayed without unnecessary cropping.

---

## 4. Enquiry Page

The Enquiry page allows users to send an enquiry to MM MODE.

The form includes fields for:

* Name
* Email
* Contact information
* Service/product interest
* Message

The form was improved by correcting the HTML structure, adding required fields, and improving the spacing and layout using CSS.

---

## 5. Contact Page

The Contact page provides ways for customers to contact MM MODE.

It includes:

* Contact information
* Email
* Phone number
* Location information
* Contact form
* Social media links
* Contact icons
* Footer

The page was corrected and styled to match the rest of the website.

---

## 6. Cart Page

The Cart page allows customers to review the products they have selected.

It includes:
- Selected product details
- Product images
- Product quantities
- Individual product prices
- Cart total
- Options to update quantities or remove products

JavaScript and localStorage are used to manage and save cart information in the browser.

---

## 7. Receipt Page

The Receipt page displays the order summary after checkout.

It includes:
- Purchased product details
- Product quantities
- Order total
- Receipt information
- Print receipt functionality

This page allows customers to review their order information and print a copy of their receipt.

# Technologies Used

The following technologies were used to develop the website:

* HTML5
* CSS3
* JavaScript
* Google Fonts
* SVG icons
* Microsoft Edge Developer Tools
* Git
* GitHub

---

---

# JavaScript Functionality

JavaScript was used to make the MM MODE website more interactive and improve the user experience.

## 1. Shopping Cart

The shopping cart allows customers to:
- Add products to the cart.
- View selected products.
- Increase or decrease product quantities.
- Remove products from the cart.
- View the total price.

The cart information is stored using localStorage so that selected products remain available when the customer navigates between pages.

## 2. Product Search and Sorting

JavaScript was used to improve product navigation.

Customers can:
- Search for products.
- Sort products according to the available sorting options.
- Navigate between product pages using pagination.

## 3. Checkout and Receipt

The checkout functionality displays the selected products and order total.

After checkout, the Receipt page displays the order summary and provides an option to print the receipt.

## 4. Interactive FAQ

An accordion was added to display frequently asked questions.

Customers can expand and collapse questions to view the answers.

## 5. Image Lightbox Gallery

Lightbox2 was used on the Product page to allow customers to view product images in a larger format.

Customers can navigate between images and close the image viewer.

## 6. Interactive Map

Leaflet was used to add an interactive map to the Contact page.

The map allows visitors to view the location information displayed on the website.

## 7. Form Validation

JavaScript and HTML form validation were used to help ensure that customers provide the required information when completing forms.

# SEO and Website Performance

SEO improvements were implemented to help search engines understand the MM MODE website and improve the experience for visitors.

## 1. On-Page SEO

The following improvements were made:

- Added descriptive page titles to the website pages.
- Added meta descriptions to provide summaries of each page.
- Improved heading structure to organise page content.
- Added descriptive alt text to images.
- Used descriptive image filenames where appropriate.
- Improved internal links to help visitors navigate between pages.
- Ensured the website is responsive on different screen sizes.

## 2. Website Performance

Several improvements were made to help the website load more efficiently:

- Converted selected images to the WebP format to reduce image file sizes.
- Used lazy loading for product images that do not need to load immediately.
- Used high loading priority for the main product image.
- Added preconnect links for Google Fonts.
- Optimised the loading of the Lightbox2 CSS file.

## 3. Technical SEO

Two files were added to the project:

- robots.txt – provides instructions for search engine crawlers.
- sitemap.xml – lists the main website pages to help search engines discover them.

The sitemap contains the website page URLs.

## 4. Mobile-Friendly Design

The website uses responsive CSS layouts and media queries to make the content accessible on desktop, tablet and mobile screens.

---

# Colour Palette

The MM MODE website uses a simple and modern colour palette.

| Colour | Hex Code  | Usage                           |
| ------ | --------- | ------------------------------- |
| Black  | `#1A1A1A` | Header, text and backgrounds    |
| Cream  | `#F5F1EA` | Main backgrounds                |
| Gold   | `#C9A227` | Buttons, highlights and accents |
| White  | `#FFFFFF` | Text, cards and backgrounds     |

The colour palette was selected to create a fashionable, clean and professional appearance.

---

# Typography

Two Google Fonts are used in the website:

* **Playfair Display** – used for headings, the logo and important titles.
* **Poppins** – used for body text, navigation, buttons and forms.

The fonts help create a combination of an elegant fashion style and a modern readable interface.

Google Fonts are loaded using preconnect and stylesheet links in the HTML head sections to improve font loading performance.

---

# CSS Layout

## CSS Grid

CSS Grid was used for layouts such as:

* Product cards
* Featured products
* Page sections
* Responsive content layouts

The product section uses a three-column layout on larger screens.

Example:

```css
.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
```

This allows the products to be arranged evenly across the page.

---

## Flexbox

Flexbox was used for:

* Navigation
* Buttons
* Footer content
* Social media links
* Alignment of elements
* Form layouts

For example, the footer social media links were changed to display horizontally:

```css
footer .footer-col ul.social-icons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    flex-wrap: nowrap;
}
```

This helped prevent the social media links from appearing vertically when they should be displayed in a row.

---

# Responsive Design

One of the main improvements made for Part 2 was responsive design.

The website was tested on:

* Desktop
* Tablet
* Mobile
* Small mobile screens

Media queries were used to change the layout according to the screen width.

## Desktop

For larger screens, the website uses multiple columns and larger spacing.

The product page displays three products per row.

---

## Tablet

A tablet breakpoint was added at approximately:

```css
@media (max-width: 1024px)
```

The layout, spacing and image sizes are adjusted so that the content fits smaller screens.

---

## Mobile

A mobile breakpoint was added at:

```css
@media (max-width: 768px)
```

The website changes from multi-column layouts to smaller layouts suitable for mobile devices.

The navigation, product grid, forms and page sections are adjusted to fit smaller screens.

---

## Small Mobile

An additional breakpoint was added at:

```css
@media (max-width: 480px)
```

This was used to improve the website on very small mobile screens.

Font sizes, image sizes, spacing and other elements were adjusted to prevent content from becoming too crowded.

---

# CSS Challenges and Improvements

During the development of Part 2, I experienced several challenges while working with CSS. These challenges helped me understand how responsive design, selectors, layouts and spacing work.

## 1. Responsive Product Grid

One of the challenges was making the product cards display correctly on different screen sizes.

Initially, the product layout could become too wide or crowded when the screen became smaller.

### Solution

I used CSS Grid and media queries.

The desktop layout uses three columns, while smaller screens reduce the number of columns.

This allowed the product cards to fit better on tablets and mobile devices.

---


## 2. Product Image Sizing

Another challenge was making sure the product images displayed correctly inside the product cards.

Using the wrong image sizing could cause the products to be cropped or stretched.

### Solution

I used:

```css
object-fit: contain;
```

This allows the complete product image to remain visible while keeping its proportions.

Different image heights were also used at different breakpoints.

---

## 3. Navigation Layout

The navigation needed to remain clear and usable on different screen sizes.

I had to adjust the spacing, alignment and font sizes so that the navigation would not become overcrowded.

### Solution

Flexbox and media queries were used to control the navigation layout.

The navigation spacing and layout were adjusted for tablet and mobile screens.

---

## 4. Footer Social Media Links

One of the CSS problems I experienced was the footer social media links appearing vertically instead of horizontally.

The general footer list styling was affecting the social media list.

### Solution

I created a more specific CSS selector:

```css
footer .footer-col ul.social-icons
```

This allowed the social media icons to use Flexbox in a horizontal row while keeping the other footer lists in their normal column layout.

---

## 5. CSS Selectors

Another challenge was understanding how different CSS selectors affect elements.

For example, a general selector such as:

```css
nav ul
```

can affect more than one navigation element on a page.

### Solution

I learned to use more specific class selectors when styling individual sections.

This helped prevent styles from affecting unrelated elements.

---

## 6. Spacing and Alignment

There were several areas where elements did not have the correct spacing or alignment.

This included:

* Buttons
* Headings
* Product cards
* Forms
* Footer sections
* Navigation

### Solution

I used CSS properties such as:

```css
margin
padding
gap
justify-content
align-items
```

These properties helped me control the positioning and spacing of the elements.

---

## 7. Typography

Another challenge was making the headings and body text look consistent across all pages.

### Solution

I used Google Fonts and created a consistent typography system.

Playfair Display is used for headings and Poppins is used for body text and interface elements.

Font sizes were also adjusted using media queries for smaller screens.

---

## 8. Responsive Images

Images needed to resize correctly when the screen became smaller.

---
### Solution

Responsive CSS was used to prevent images from overflowing their containers.

The image dimensions were adjusted at different breakpoints, while `object-fit` was used to control how images appear inside their containers.

---

## Hover Effects and Transitions

CSS hover effects and transitions were used to improve the appearance and interactivity of website elements.

These effects were applied to elements such as:

- Navigation links
- Buttons
- Product cards
- Form elements

They provide visual feedback when visitors interact with these elements.

---

---

# Changes Made for Part 2

Part 2 focused on improving the website structure, correcting HTML errors and enhancing the overall design and responsiveness.

## HTML Changes

- Created a separate `html` folder.
- Moved the website pages into the `html` folder.
- Corrected HTML spelling errors.
- Corrected incorrect closing tags.
- Corrected form elements.
- Added required attributes where appropriate.
- Corrected navigation labels.
- Improved image `alt` text.
- Corrected page titles.
- Improved meta descriptions.
- Corrected ARIA attributes.
- Corrected footer class names.
- Corrected heading text.

## Website Structure Changes

The project was reorganised into folders to make the website easier to manage.


The new structure is:

```text
MM MODE
│
├── CSS
│   └── style.css
│
├── Js
│   ├── app.js
│   └── script.js
│
├── assets
│   ├── home
│   ├── about.jpg
│   ├── product.jpg
│   ├── enquiry.jpg
│   └── contact.jpg
│
├── html
│   ├── index.html
│   ├── about.html
│   ├── product.html
│   ├── enquiry.html
│   ├── contact.html
│   ├── cart.html
│   └── receipt.html
│
├── robots.txt
├── sitemap.xml
└── README.md
```

---

# Responsive Testing

The website was tested using Microsoft Edge Developer Tools.

The responsive design was checked at different screen sizes, including:

* Desktop: approximately 1440 × 900
* Tablet: approximately 768 × 1024
* Mobile: approximately 375 × 667

The testing helped identify problems with:

* Navigation
* Product cards
* Images
* Footer
* Text spacing
* Buttons
* Forms
* Page width

After testing, CSS media queries were adjusted to improve the layout.

---

# Git and GitHub

Git was used to track and manage changes made during the development of the MM MODE website.

The project was connected to the MM MODE Part 3 GitHub repository.

Repository:

[MM MODE – Part 3 GitHub Repository](https://github.com/EMGPSD/wede5020-2026-part-3-st10541008)

[MM MODE – Part 2 GitHub Repository](https://github.com/EMGPSD/wede5020-2026-part-2-st10541008)

[MM MODE – Part 1 GitHub Repository](https://github.com/EMGPSD/wede5020-2026-wede5020-part-1-st10541008)


Git was used to commit and push the website improvements to GitHub.

Examples of changes committed include:

* Adding JavaScript functionality.
* Implementing shopping cart functionality.
* Adding product search, sorting and pagination.
* Improving form validation.
* Adding the FAQ accordion, image lightbox and interactive map.
* Improving SEO and website performance.
* Updating project documentation.


# Project References

## Web Development References

W3C. [Online]. Available at: https://www.w3.org/ [Accessed 02 October 2026].

MDN Web Docs. [Online]. Available at: https://developer.mozilla.org/ [Accessed 02 October 2026].

Nielsen Norman Group. [Online]. Available at: https://www.nngroup.com/ [Accessed 02 October 2026].



# Image and Icon References

Anita Austvika, 2023. Unsplash. [online] Available at: https://plus.unsplash.com/premium_photo-1681276169690-a22f1193c784?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D [Accessed 02 October 2026].

Getty Images, 2022. Unsplash. [online] Available at: https://plus.unsplash.com/premium_photo-1661351404790-dd90f03228eb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D [Accessed 02 October 2026].

jesselsookha, 2026. GitHub. [online] Available at: https://github.com/jesselsookha/WEDE2026/tree/main/code/css [Accessed 02 October 2026].

Lia Bekyan, 2024. Unsplash. [online] Available at: https://plus.unsplash.com/premium_photo-1706806943506-ab5ab9f6b45a?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D [Accessed 02 October 2026].

SVG, 2001. SVG Repo. [online] Available at: https://www.svgrepo.com/svg/219399/schedule-calendar [Accessed 02 October 2026].

SVG, 2001. SVG Repo. [online] Available at: https://www.svgrepo.com/svg/478359/phone [Accessed 02 October 2026].

SVG, 2001. SVG Repo. [online] Available at: https://www.svgrepo.com/svg/485253/email-opened [Accessed 02 October 2026].

SVG, 2001. SVG Repo. [online] Available at: https://www.svgrepo.com/svg/527441/share [Accessed 02 October 2026].

---

# CSS References

W3Schools, 1998. CSS Flexbox Container. [online] Available at: https://www.w3schools.com/css/css3_flexbox_container.asp [Accessed 02 October 2026].

W3Schools, 1998. CSS Box Shadows. [online] Available at: https://www.w3schools.com/css/css3_shadows_box.asp [Accessed 02 October 2026].

W3Schools, 1998. CSS Buttons. [online] Available at: https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_basic [Accessed 02 October 2026].

W3Schools, 1998. CSS Google Fonts. [online] Available at: https://www.w3schools.com/css/tryit.asp?filename=trycss_font-google_multiple [Accessed 02 October 2026].

W3Schools, 1998. External CSS. [online] Available at: https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_external [Accessed 02 October 2026].

W3Schools, 1998. CSS Image Gallery. [online] Available at: https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery [Accessed 02 October 2026].

W3Schools, 1998. CSS Tutorial. [online] Available at: https://www.w3schools.com/css/default.asp [Accessed 02 October 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/css/tryit.asp?filename=trycss_grid> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_pagination> [Accessed 07 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/js_dates.asp?utm_source=chatgpt.com> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/js_functions.asp?utm_source=chatgpt.com> [Accessed 04 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/js_htmldom_elements.asp?utm_source=chatgpt.com> [Accessed 22 October 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/js_json_parse.asp?utm_source=chatgpt.com> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onclick1> [Accessed 22 October 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_numbers1> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_throw_error> [Accessed 04 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_variables_let> [Accessed 05 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/jsref_ceil.asp?utm_source=chatgpt.com> [Accessed 07 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/jsref_find.asp?utm_source=chatgpt.com> [Accessed 05 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/jsref_from.asp?utm_source=chatgpt.com> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/jsref_stringify.asp?utm_source=chatgpt.com> [Accessed 05 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/met_document_createelement.asp?utm_source=chatgpt.com> [Accessed 22 October 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/met_element_closest.asp?utm_source=chatgpt.com> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/met_win_print.asp?utm_source=chatgpt.com> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/prop_win_localstorage.asp?utm_source=chatgpt.com> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/prop_win_localstorage.asp?utm_source=chatgpt.com> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_preventdefault> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_print> [Accessed 04 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_print> [Accessed 06 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_push> [Accessed 05 November 2026].

Jan Egil Refsnes, 1998. W3school. [online] Available at: <https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2> [Accessed 06 November 2026].

Lokesh Dhakar, 2006. github. [online] Available at: <https://github.com/lokesh/lightbox2/releases?utm_source=chatgpt.com> [Accessed 07 November 2026].

w3schools, 1998. w3school. [online] Available at: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_external> [Accessed 22 October 2026].

---

# JavaScript, Libraries and SEO References

MDN Web Docs. JavaScript Guide. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide [Accessed 07 November 2026].

MDN Web Docs. Window: localStorage property. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage [Accessed 07 November 2026].

Leaflet. Leaflet Documentation. [online] Available at: https://leafletjs.com/reference.html [Accessed 08 November 2026].

Lokesh Dhakar. Lightbox2 Documentation. [online] Available at: https://lokeshdhakar.com/projects/lightbox2/ [Accessed 08 November 2026].

Google Search Central. Build and Submit a Sitemap. [online] Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap [Accessed 08 November 2026].

Google Search Central. Introduction to robots.txt. [online] Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro [Accessed 08 November 2026].



