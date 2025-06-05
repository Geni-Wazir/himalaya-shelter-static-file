const copyRight = document.getElementById("copyright_text")
if (copyRight){
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright_text").innerHTML = `Copyright &copy; ${currentYear} All Rights Reserved`;
    
};

// Select the grid element
var grid = document.querySelector('.grid');

// Check if the grid has the 'data-masonry' attribute
if (grid && grid.hasAttribute('data-masonry')) {
    // Parse the JSON from the 'data-masonry' attribute
    var masonryOptions = JSON.parse(grid.getAttribute('data-masonry'));

    // Initialize Masonry with the options
    var msnry = new Masonry(grid, masonryOptions);
}



document.addEventListener('DOMContentLoaded', function () {
    const editModelButtons = document.querySelectorAll('[data-toggle="editModel"]');
    const editModel = document.getElementById('editModel');
    const cancelUpdate = document.getElementById('cancelUpdate');
    const userForm = document.getElementById('userForm');
    if (editModel) {

        editModelButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Get user name from the clicked button
                const userEmail = button.getAttribute('data-user-email');
                const userName = button.getAttribute('data-user-name');
                const userRole = button.getAttribute('data-user-role');

                // Update the modal content with the user info
                const useremail = userForm.querySelector('input[name="new_email"]'); // Select user email attribute
                const username = userForm.querySelector('input[name="new_name"]'); // Select user name attribute
                const userrole = userForm.querySelector('select[name="new_role"]'); // Select user role attribute
                useremail.value = userEmail; // Set the user email
                username.value = userName; // Set the user name
                userrole.value = userRole; // Set the user role


                editModel.classList.remove('hidden');
            });
        });

        cancelUpdate.addEventListener('click', () => {
            editModel.classList.add('hidden');
        });
    }

});



document.addEventListener('DOMContentLoaded', function () {
    const deleteModelButtons = document.querySelectorAll('[data-toggle="deleteModel"]');
    const deleteModel = document.getElementById('deleteModel');
    const cancelDelete = document.getElementById('cancelDelete');
    const deleteMessage = document.getElementById('deleteMessage');
    const deleteModelButton = document.getElementById('deleteModelButton');
    if (deleteModel) {

        deleteModelButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Get user name from the clicked button
                const modelData = button.getAttribute('data-model-data')
                const deleteURL = button.getAttribute('data-delete-url')
                deleteMessage.innerHTML = ` Are you sure you want to delete <b> ${modelData} </b> ?`;
                deleteModelButton.href = deleteURL;

                deleteModel.classList.remove('hidden');
            });
        });

        cancelDelete.addEventListener('click', () => {
            deleteModel.classList.add('hidden');
        });
    }

});


document.addEventListener('DOMContentLoaded', function () {
    const publishModelButtons = document.querySelectorAll('[data-toggle="publishModel"]');
    const publishModel = document.getElementById('publishModel');
    const cancelPublish = document.getElementById('cancelPublish');
    const publishMessage = document.getElementById('publishMessage');
    const publishModelButton = document.getElementById('publishModelButton');
    if (publishModel) {

        publishModelButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Get user name from the clicked button
                const modelData = button.getAttribute('data-model-data')
                const publishURL = button.getAttribute('data-publish-url')
                publishMessage.innerHTML = ` Are you sure you want to publish <b> ${modelData} </b> ?`;
                publishModelButton.href = publishURL;

                publishModel.classList.remove('hidden');
            });
        });

        cancelPublish.addEventListener('click', () => {
            publishModel.classList.add('hidden');
        });
    }

});



document.addEventListener('DOMContentLoaded', function () {
    const draftModelButtons = document.querySelectorAll('[data-toggle="draftModel"]');
    const draftModel = document.getElementById('draftModel');
    const cancelDraft = document.getElementById('cancelDraft');
    const draftMessage = document.getElementById('draftMessage');
    const draftModelButton = document.getElementById('draftModelButton');
    if (draftModel) {

        draftModelButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Get user name from the clicked button
                const modelData = button.getAttribute('data-model-data')
                const draftURL = button.getAttribute('data-draft-url')
                draftMessage.innerHTML = ` Are you sure you want to draft <b> ${modelData} </b> ?`;
                draftModelButton.href = draftURL;

                draftModel.classList.remove('hidden');
            });
        });

        cancelDraft.addEventListener('click', () => {
            draftModel.classList.add('hidden');
        });
    }

});



const images_upload_url = 'https://himalayashelter.com/dashboard/images/upload'
tinymce.init({
    selector: '#inclusions_exclusions, .policy, .blogs',
    plugins: [
        // Core editing features
        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount', 'advlist',
        // Your account includes a free trial of TinyMCE premium features
        // Try the most popular premium features until Oct 19, 2024:
        //   'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
    ],
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    images_upload_url: images_upload_url,
    automatic_uploads: true,
    image_caption: true,
    image_advtab: true,
    mediaembed_inline_styles: true,

});



let sections = [];
let sectionCounter = 1;

// Initialize sections with provided data if available
function initializeSections() {
    const dataContent = document.getElementById('sections-container');
    if (dataContent) {
        const dataContentData = dataContent.getAttribute('data-content');

        if (dataContentData) {
            const initialData = JSON.parse(dataContentData);
            initialData.forEach(item => {
                sections.push(item);
                addSection(item.title, item.content, item.id);  // Avoid passing sectionCounter here
            });
            sectionCounter = initialData.length + 1;  // Set counter based on initial data
        }
    }
}

// Function to log JSON data
function logSections() {
    const content = document.getElementById('content');
    content.value = JSON.stringify(sections, null, 2);
}

// Function to add a new section
function addSection(title = '', content = '', sectionId = `section-${sectionCounter}`) {
    // Increment sectionCounter immediately to ensure unique IDs
    sectionCounter++;

    // Create section container
    const section = document.createElement('div');
    section.classList.add('bg-white', 'p-4', 'shadow-md', 'rounded', 'relative', 'space-y-2');
    section.setAttribute('id', sectionId);

    // Inner HTML for title input and content textarea
    section.innerHTML = `
    <button class="absolute top-2 right-2 text-red-500 hover:text-red-700" onclick="removeSection('${sectionId}')">
      &#10005;
    </button>
    <div>
      <input type="text" placeholder="Title" class="title-input border-b-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500" value="${title}" />
    </div>
    <div>
      <textarea id="content-${sectionCounter}" class="content-input border-b-2 border-gray-300 rounded-md p-2 w-full">${content}</textarea>
    </div>
  `;

    document.getElementById('sections-container').appendChild(section);

    // Add TinyMCE to the textarea
    tinymce.init({
        selector: `#${sectionId} .content-input`,
        plugins: [
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount', 'advlist',
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        images_upload_url: images_upload_url,
        images_reuse_filename: false,
        automatic_uploads: true,
        image_caption: true,
        mediaembed_inline_styles: true,
        setup: (editor) => {
            editor.on('change', () => updateSectionData(sectionId));
            editor.on('blur', () => updateSectionData(sectionId));
        }
    });

    // Event listener for title input to update JSON data
    section.querySelector('.title-input').addEventListener('input', () => updateSectionData(sectionId));

    // Add new section to the sections array if it's a newly added section
    if (!sections.some(s => s.id === sectionId)) {
        sections.push({ id: sectionId, title, content });
    }
    logSections();
}

// Function to remove a section
function removeSection(sectionId) {
    document.getElementById(sectionId).remove();
    sections = sections.filter(section => section.id !== sectionId);
    logSections();
}

// Function to update section data in the array
function updateSectionData(sectionId) {
    const sectionDiv = document.getElementById(sectionId);
    const title = sectionDiv.querySelector('.title-input').value;
    const content = tinymce.get(sectionDiv.querySelector('.content-input').id)?.getContent() || '';

    // Find and update the section in the sections array
    const sectionIndex = sections.findIndex(section => section.id === sectionId);
    if (sectionIndex > -1) {
        sections[sectionIndex].title = title;
        sections[sectionIndex].content = content;
    }
    logSections();
}

// Event listener for Add Section button
const addContentSection = document.getElementById('add-section-btn');
if (addContentSection) {
    addContentSection.addEventListener('click', () => addSection());
}

// Initialize sections on page load
initializeSections();










let dayCounter = 1;
let entries = [];

// Function to initialize the form with provided data from the data-itinerary attribute
function initializeEntries() {
    const entriesContainer = document.getElementById('entries');
    if (entriesContainer) {
        const itineraryData = entriesContainer.getAttribute('data-itinerary');

        // Parse the provided itinerary data if it exists
        let providedEntries = [];
        if (itineraryData) {
            try {
                // console.log(itineraryData)
                providedEntries = JSON.parse(itineraryData);
            } catch (e) {
                console.error('Invalid JSON data in itinerary:', e);
            }
        }

        // If provided entries exist, populate the form, otherwise add a blank entry
        if (providedEntries.length > 0) {
            providedEntries.forEach((entry) => {
                addNewEntry(entry.title, entry.content);  // Populate with title and content
            });
        }
    }
}

const entriesContainer = document.getElementById('entries');
if (entriesContainer) {
    initializeEntries();
}


// Function to create a new section (optionally with title and content)
function addNewEntry(title = '', content = '') {
    const entryId = `entry-${dayCounter}`;

    // Create a new section dynamically
    const entry = document.createElement('div');
    entry.classList.add('bg-gray-50', 'p-4', 'shadow-md', 'rounded', 'space-y-2');
    entry.setAttribute('id', entryId);

    entry.innerHTML = `
       <div class="flex justify-between items-center rounded-lg">
            <span class="text-gray-700 font-semibold">Day ${dayCounter}</span>
            <button class="remove-entry-btn" onclick="removeEntry(${dayCounter})">
                <svg class="w-6 text-red-500" fill="currentColor" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path></g></svg>
            </button>
        </div>
        <div>
            <input type="text" placeholder="Title" class="title-input border-b-2 border-gray-300 rounded-md p-2 ps-4 w-full focus:outline-none focus:border-blue-500" value="${title}" />
        </div>
        <div>
            <textarea placeholder="Content" class="content-input border-b-2 border-gray-300 rounded-md p-2 ps-4 w-full block">${content}</textarea>
        </div>
    `;

    // Append the new entry to the entries container
    document.getElementById('entries').appendChild(entry);

    // Add event listeners to log changes on focusout for both title and content inputs
    const titleInput = entry.querySelector('.title-input');
    const contentInput = entry.querySelector('.content-input');

    titleInput.addEventListener('focusout', logEntries);
    contentInput.addEventListener('focusout', logEntries);

    // Initialize TinyMCE on the new content textarea
    tinymce.init({
        selector: `#${entryId} .content-input`,  // Target the specific textarea inside the new entry
        plugins: [
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount', 'advlist'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        images_upload_url: images_upload_url,
        images_reuse_filename: false,
        automatic_uploads: true,
        image_caption: true,
        mediaembed_inline_styles: true,
        setup: (editor) => {
            editor.on('change', () => logEntries());
            editor.on('blur', () => logEntries());
        }
    });

    // Push the entry to the entries array
    entries.push({
        day: dayCounter,
        title: title,
        content: content
    });

    dayCounter++;
}


// Function to remove an entry
function removeEntry(day) {
    // Remove the section from the DOM
    document.getElementById(`entry-${day}`).remove();

    // Remove the entry from the entries array
    entries = entries.filter(entry => entry.day !== day);

    // Re-sequence the days
    resequenceEntries();
}

// Function to re-sequence the days after an entry is removed
function resequenceEntries() {
    const entryDivs = document.querySelectorAll('[id^="entry-"]');
    let newDayCounter = 1;

    // Update each entry's day and ID
    entryDivs.forEach((entryDiv, index) => {
        const daySpan = entryDiv.querySelector('span');
        const removeBtn = entryDiv.querySelector('.remove-entry-btn');
        const currentId = entryDiv.getAttribute('id').split('-')[1];

        // Update the day display and button functionality
        daySpan.textContent = `Day ${newDayCounter}`;
        removeBtn.setAttribute('onclick', `removeEntry(${newDayCounter})`);

        // Update the DOM ID for the section
        entryDiv.setAttribute('id', `entry-${newDayCounter}`);

        // Update the entries array to reflect new day values
        entries[index].day = newDayCounter;

        newDayCounter++;
    });

    dayCounter = newDayCounter;
    logEntries();
}

// Function to log the JSON data and update the itinerary input field
function logEntries() {
    const entryDivs = document.querySelectorAll('[id^="entry-"]');
    entryDivs.forEach((entryDiv, index) => {
        const title = entryDiv.querySelector('.title-input').value;
        const contentTextarea = entryDiv.querySelector('.content-input');
        const content = tinymce.get(contentTextarea.id)?.getContent() || '';
        // Update the entries array
        entries[index].title = title;
        entries[index].content = content;
    });

    // Convert entries array to JSON string and assign it to the itinerary input field
    const itineraryJson = JSON.stringify(entries, null, 2);
    if (itineraryJson) {
        document.getElementById('itinerary').value = itineraryJson;
    }
}

// Event listener for the Add New Day button
const addEntryButton = document.getElementById('add-entry-btn');

if (addEntryButton) {
    addEntryButton.addEventListener('click', () => {
        addNewEntry();
    });
}




let availableDates = []; // Array to hold available dates
let dateCounter = 1; // Counter for date sections

// Function to initialize available dates from data-available-dates attribute
function initializeAvailableDates() {
    const datesContainer = document.getElementById('dates');
    if (datesContainer) {
        const availableDatesData = datesContainer.getAttribute('data-available-dates');

        // Parse the provided available dates data if it exists
        if (availableDatesData) {
            try {
                availableDates = JSON.parse(availableDatesData);
            } catch (e) {
                console.error('Invalid JSON data in available dates:', e);
            }
        }

        // Populate the available dates in the DOM
        availableDates.forEach((date) => {
            addNewDateEntry(date.date, date.availableSeats);
        });

    }
}

// Function to create a new date section (optionally with a date and availableSeats)
function addNewDateEntry(date = '', availableSeats = '') {
    const dateId = `date-${dateCounter}`;

    // Create a new date entry dynamically
    const dateEntry = document.createElement('div');
    dateEntry.classList.add('p-2', 'rounded', 'space-y-2');
    dateEntry.setAttribute('id', dateId);

    dateEntry.innerHTML = `
        <div class="flex justify-between items-center">
            <span class="text-gray-700 font-semibold">Available Date ${dateCounter}</span>
        </div>
        <div class="flex gap-3">
            <input type="date" class="date-input p-2 border border-gray-300 rounded" value="${date}" onblur="updateAvailableDates()" />
            <input type="number" class="availableSeats-input p-2 border border-gray-300 rounded" placeholder="Available Seats" value="${availableSeats}" onblur="updateAvailableDates()" />
            <button class="remove-date-btn bg-red-300 hover:bg-red-400 text-white font-bold px-2 rounded" onclick="removeDateEntry(${dateCounter})">
                <svg class="w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 5H18M9 5V5C10.5769 3.16026 13.4231 3.16026 15 5V5M9 20H15C16.1046 20 17 19.1046 17 18V9C17 8.44772 16.5523 8 16 8H8C7.44772 8 7 8.44772 7 9V18C7 19.1046 7.89543 20 9 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
        </div>
    `;

    // Append the new date entry to the dates container
    document.getElementById('dates').appendChild(dateEntry);

    // Push the new date entry to the availableDates array
    availableDates.push({ date, availableSeats });

    dateCounter++;
    updateAvailableDates(); // Update the input field after adding a date
}

// Function to remove a date entry
function removeDateEntry(counter) {
    // Remove the date entry from the DOM
    document.getElementById(`date-${counter}`).remove();

    // Remove the date from the availableDates array
    availableDates = availableDates.filter((_, index) => index + 1 !== counter);

    // Re-sequence the available dates
    resequenceAvailableDates();
}

// Function to re-sequence the available dates after an entry is removed
function resequenceAvailableDates() {
    const dateDivs = document.querySelectorAll('[id^="date-"]');
    let newDateCounter = 1;

    // Update each date's display and ID
    dateDivs.forEach((dateDiv) => {
        const dateSpan = dateDiv.querySelector('span');
        const removeBtn = dateDiv.querySelector('.remove-date-btn');
        const currentId = dateDiv.getAttribute('id').split('-')[1];

        // Update the date display and button functionality
        dateSpan.textContent = `Available Date ${newDateCounter}`;
        removeBtn.setAttribute('onclick', `removeDateEntry(${newDateCounter})`);

        // Update the DOM ID for the section
        dateDiv.setAttribute('id', `date-${newDateCounter}`);

        newDateCounter++;
    });

    dateCounter = newDateCounter;
    updateAvailableDates(); // Update the input field after resequencing
}

// Function to update the available dates input field with the current values
function updateAvailableDates() {
    const dateInputs = document.querySelectorAll('.date-input');
    const availableSeatsInputs = document.querySelectorAll('.availableSeats-input');
    availableDates = []; // Clear the array to rebuild it

    dateInputs.forEach((input, index) => {
        if (input.value || availableSeatsInputs[index].value) {
            availableDates.push({ date: input.value, availableSeats: availableSeatsInputs[index].value });
        }
    });

    // Sort availableDates by date
    availableDates.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Convert availableDates array to JSON string and assign it to the input field
    const availableDatesJson = JSON.stringify(availableDates);
    document.getElementById('available_dates').value = availableDatesJson;

    // console.log(availableDatesJson); // Log available dates as JSON
}

// Event listener for the Add New Date button
const addDateButton = document.getElementById('add-date-btn');
if (addDateButton) {
    addDateButton.addEventListener('click', () => {
        addNewDateEntry(); // Add an empty date entry
    });
}
// Initialize available dates when the page loads
initializeAvailableDates();





// Function to generate the accordion content for a specific month and year
function generateAccordionContent(container, month, year, highlightedDates, trekTitle) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Find or create the accordion for the year
    let yearAccordion = container.querySelector(`.accordion[data-year='${year}']`);
    if (!yearAccordion) {
        yearAccordion = document.createElement('div');
        yearAccordion.classList.add('accordion');
        yearAccordion.setAttribute('data-year', year);

        const yearHeader = document.createElement('p');
        yearHeader.innerHTML = `<b>Available Dates - ${year}</b>`;
        yearAccordion.appendChild(yearHeader);

        container.querySelector('.faqs_main_item').appendChild(yearAccordion);
    }

    // Create the accordion item for the month
    const monthAccordion = document.createElement('div');
    monthAccordion.classList.add('accordion-item', 'marhracc');

    const monthHeaderId = `heading-${month}-${year}-${container.id}`;
    const collapseId = `collapse-${month}-${year}-${container.id}`;

    monthAccordion.innerHTML = `
        <h2 class="accordion-header h2lnht" id="${monthHeaderId}">
            <button class="accordion-button btfnsz collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                ${monthNames[month]} ${year}
            </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse" 
            aria-labelledby="${monthHeaderId}" data-bs-parent=".accordion">
            <div class="accordion-body">
                <div class="accordion-content"></div>
            </div>
        </div>
    `;

    // Populate the dates within the accordion content
    const contentDiv = monthAccordion.querySelector('.accordion-content');

    highlightedDates.forEach(dateObj => {
        const startDate = new Date(dateObj.date);
        const formattedStartDate = `${startDate.getDate()}${getOrdinal(startDate.getDate())} ${monthNames[startDate.getMonth()]}`;

        const dateRow = document.createElement('div');
        dateRow.classList.add('dateRow');

        if (dateObj.availableSeats > 5) {
            dateRow.classList.add('statusAvailable');
        } else if (dateObj.availableSeats > 0) {
            dateRow.classList.add('statusFillingFast');
        } else {
            dateRow.classList.add('statusFull');
        }

        dateRow.innerHTML = `
        <div>
            <p class="dateText1">
                <span style="color: #009688;">${formattedStartDate}</span>
            </p>
        </div>
        <p class="statusText">
            ${dateObj.availableSeats > 0 ? (dateObj.availableSeats > 5 ? 'AVBL' : `LAST ${dateObj.availableSeats}`) : 'FULL'}
        </p>
    `;

        contentDiv.appendChild(dateRow);
    });

    yearAccordion.appendChild(monthAccordion);
}

// Helper function to get ordinal suffix (e.g., 1st, 2nd, 3rd)
function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

// Function to extract unique months from the data and generate the accordion
// Function to extract unique months from the data and generate the accordion
function generateAccordionFromData(container, datesData, trekTitle) {
    const monthsMap = new Map();
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize to midnight for accurate comparison

    // Filter out past dates and group future dates by month and year
    datesData.forEach(item => {
        const date = new Date(item.date);
        date.setHours(0, 0, 0, 0); // normalize

        if (date >= today) {
            const month = date.getMonth();
            const year = date.getFullYear();
            const key = `${year}-${month}`;

            if (!monthsMap.has(key)) {
                monthsMap.set(key, []);
            }
            monthsMap.get(key).push(item);
        }
    });

    // Sort keys by year and month to ensure ascending order
    const sortedKeys = Array.from(monthsMap.keys()).sort((a, b) => {
        const [yearA, monthA] = a.split('-').map(Number);
        const [yearB, monthB] = b.split('-').map(Number);
        return yearA === yearB ? monthA - monthB : yearA - yearB;
    });

    // Generate month lists in ascending order
    sortedKeys.forEach(key => {
        const [year, month] = key.split('-').map(Number);
        generateAccordionContent(container, month, year, monthsMap.get(key), trekTitle);
    });
}


// Fetch and parse the dates data for each container
document.addEventListener("DOMContentLoaded", function () {
    const calendarContainers = document.querySelectorAll('.faqs_item_wrapper');

    // Loop through each calendar container
    calendarContainers.forEach(container => {
        const datesData = JSON.parse(container.getAttribute('data-dates') || '[]');
        const trekTitle = container.getAttribute('data-trek');
        generateAccordionFromData(container, datesData, trekTitle);
    });
});






function previewImage(event, id='cover-image-preview') {
    const reader = new FileReader();
    reader.onload = function () {
        const previewDiv = document.getElementById(id);
        previewDiv.style.backgroundImage = `url(${reader.result})`;
        previewDiv.style.backgroundSize = 'cover';
        previewDiv.style.backgroundPosition = 'center';
    };
    reader.readAsDataURL(event.target.files[0]);
}


document.addEventListener("DOMContentLoaded", function () {
    // Function to handle gallery-specific behavior
    function setupGalleryHandlers(galleryId, inputFieldId, season) {
        const galleryContainer = document.getElementById(galleryId);
        const galleryForm = document.getElementById('galleryform')
        if (galleryContainer) {
            // Parse the data-gallery-list attribute as a JSON object
            let galleryData = JSON.parse(galleryForm.getAttribute('data-gallery-list') || '{}');
            // Get the gallery list for the specific season

            const inputField = document.getElementById(inputFieldId);

            // Attach event listeners to all "x" buttons
            const removeButtons = galleryContainer.querySelectorAll('.remove-btn');

            removeButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const imageContainer = button.parentElement;
                    const imageName = imageContainer.querySelector('img').src.split('/').pop(); // Get the image name from the src
                    const region = imageContainer.querySelector('img').getAttribute('data-region');

                    // Call the removeImage function
                    removeImage(imageName, imageContainer, region);
                });
            });

            // Function to remove an image
            function removeImage(imageName, imageElement, region) {
                // Remove the image from the gallery list for the specific season and region
                galleryData[region] = galleryData[season].filter(image => image !== imageName);
                // console.log(JSON.stringify(galleryData))
                // Update the season's list in the main object
                // galleryData[region] = galleryList;

                // Remove the image element from the DOM
                imageElement.remove();

                // Update the input field with the updated JSON object
                inputField.value = JSON.stringify(galleryData);

                // Update the data-gallery-list attribute
                galleryContainer.setAttribute('data-gallery-list', JSON.stringify(galleryData));
            }
        }
    }

    // Set up handlers for each gallery
    setupGalleryHandlers('gallery-summer', 'gallery_list', 'summer');
    setupGalleryHandlers('gallery-winter', 'gallery_list', 'winter');
    setupGalleryHandlers('gallery-spring', 'gallery_list', 'spring');
});






let faqs = [];
let faqCounter = 1;

// Initialize FAQs with provided data if available
function initializeFaqs() {
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        const faqData = faqContainer.getAttribute('data-faq');
        
        if (faqData) {
            const initialFaqs = JSON.parse(faqData);
            initialFaqs.forEach(item => {
                faqs.push({ question: item.question, answer: item.answer, id: `faq-${faqCounter}` });
                addFaq(item.question, item.answer, `faq-${faqCounter}`);
                faqCounter++;
            });
        }
    }
}

// Function to log FAQs JSON data
function logFaqs() {
    const faqInput = document.querySelector('[name="faqs"]');
    if (faqInput) {
        faqInput.value = JSON.stringify(faqs, null, 2);
    }
}

// Function to add a new FAQ
function addFaq(question = '', answer = '', faqId = `faq-${faqCounter}`) {
    faqCounter++;

    const faq = document.createElement('div');
    faq.classList.add('bg-white', 'p-4', 'shadow-md', 'rounded', 'relative', 'space-y-2');
    faq.setAttribute('id', faqId);

    faq.innerHTML = `
    <button type="button" class="absolute top-2 right-2 text-red-500 hover:text-red-700" onclick="removeFaq('${faqId}')">
      &#10005;
    </button>
    <div>
      <input type="text" placeholder="Question" class="faq-question-input border-b-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500" value="${question}" />
    </div>
    <div>
      <textarea id="answer-${faqCounter}" class="faq-answer-input border-b-2 border-gray-300 rounded-md p-2 w-full">${answer}</textarea>
    </div>
  `;

    document.getElementById('faq-container').appendChild(faq);

    // Initialize TinyMCE for the answer textarea
    tinymce.init({
        selector: `#${faqId} .faq-answer-input`,
        plugins: [
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount', 'advlist',
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        images_upload_url: images_upload_url,
        images_reuse_filename: false,
        automatic_uploads: true,
        image_caption: true,
        mediaembed_inline_styles: true,
        setup: (editor) => {
            editor.on('change', () => updateFaqData(faqId));
            editor.on('blur', () => updateFaqData(faqId));
        }
    });

    // Event listener for question input to update JSON data
    faq.querySelector('.faq-question-input').addEventListener('input', () => updateFaqData(faqId));

    // Add new FAQ to the FAQs array if it's a newly added FAQ
    if (!faqs.some(f => f.id === faqId)) {
        faqs.push({ id: faqId, question, answer });
    }
    logFaqs();
}

// Function to remove an FAQ
function removeFaq(faqId) {
    document.getElementById(faqId).remove();
    faqs = faqs.filter(faq => faq.id !== faqId);
    logFaqs();
}

// Function to update FAQ data in the array
function updateFaqData(faqId) {
    const faqDiv = document.getElementById(faqId);
    const question = faqDiv.querySelector('.faq-question-input').value;
    const answer = tinymce.get(faqDiv.querySelector('.faq-answer-input').id)?.getContent() || '';

    const faqIndex = faqs.findIndex(faq => faq.id === faqId);
    if (faqIndex > -1) {
        faqs[faqIndex].question = question;
        faqs[faqIndex].answer = answer;
    }
    logFaqs();
}

// Function to remove a section and its associated FAQ
function removeSection(sectionId) {
    document.getElementById(sectionId).remove();
    faqs = faqs.filter(faq => !faq.id.includes(sectionId));
    logFaqs();
}

// Event listener for Add FAQ button
const addFaqButton = document.getElementById('add-faq-btn');
if (addFaqButton) {
    addFaqButton.addEventListener('click', () => addFaq());
}

// Initialize FAQs on page load
initializeFaqs();








document.addEventListener('DOMContentLoaded', () => {
    function initializeTagSystem(containerId, inputId, templateId, hiddenInputName) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const input = document.getElementById(inputId);
        const template = document.getElementById(templateId);
        const hiddenInput = document.querySelector(`input[name="${hiddenInputName}"]`);
        const tags = [];

        const predefinedTags = container.dataset.tags ? JSON.parse(container.dataset.tags) : [];
        predefinedTags.forEach(tag => addTag(tag.trim()));

        function handleTagInput(event) {
            if (event.key === 'Enter' && input.value.trim() !== '') {
                event.preventDefault();
                addTag(input.value.trim());
                input.value = '';
            }
        }

        function addTag(tagText) {
            if (tags.includes(tagText)) return;
            tags.push(tagText);
            updateTagsInput();

            const newTag = template.content.cloneNode(true);
            newTag.querySelector('.tag-text').textContent = tagText;
            newTag.querySelector('button').addEventListener('click', function () {
                removeTag(tagText, this.parentElement);
            });

            container.insertBefore(newTag, input);
        }

        function removeTag(tagText, tagElement) {
            const index = tags.indexOf(tagText);
            if (index > -1) tags.splice(index, 1);
            updateTagsInput();
            tagElement.remove();
        }

        function updateTagsInput() {
            hiddenInput.value = JSON.stringify(tags);
        }

        input.addEventListener('keydown', handleTagInput);
    }

    initializeTagSystem('tag-container', 'tag-input', 'tag-template', 'tags');
    initializeTagSystem('trek-container', 'trek-input', 'trek-template', 'treks');
    initializeTagSystem('blog-container', 'blog-input', 'blog-template', 'blogs');
});


  

const expandButton = document.querySelector('.expand-button');
if (expandButton){
    document.addEventListener('DOMContentLoaded', function() {
        const expandButton = document.querySelector('.expand-button');
        const contentWrapper = document.querySelector('.content-wrapper');
        const contentFade = document.querySelector('.content-fade');
    
        expandButton.addEventListener('click', function() {
            if (contentWrapper.style.maxHeight === '500px') {
                // Expand
                contentWrapper.style.maxHeight = 'none';
                contentFade.style.display = 'none';
                expandButton.textContent = 'Show Less';
            } else {
                // Collapse
                contentWrapper.style.maxHeight = '500px';
                contentFade.style.display = 'block';
                expandButton.textContent = 'View More';
            }
        });
    });
};


// JavaScript to handle the file input click event
const itinerary_pdf = document.getElementById('itinerary_pdf');
const label = document.getElementById('uploadLabel');

if (itinerary_pdf) {
    if (label.getAttribute('data-file') !== 'None') {
        label.style.backgroundColor = 'rgb(220, 255, 220)';
    }
    itinerary_pdf.addEventListener('change', function () {
    if (this.files.length > 0 && this.files[0].type === 'application/pdf') {
      // Change the background color to green if a valid PDF is selected
      label.style.backgroundColor = 'rgb(220, 255, 220)';
    } else {
      // Reset to the default background color if no file is selected
      label.style.backgroundColor = 'white';
    }
  });
};


const videoTitleSection = document.getElementById('add-title-section')
if (videoTitleSection){
    document.addEventListener('DOMContentLoaded', initializeFromData);
    document.getElementById('add-title-section').addEventListener('click', () => addTitleSection());

    function initializeFromData() {
      const container = document.getElementById('title-sections-container');
      const data = JSON.parse(container.getAttribute('data-trekVideos') || '[]');
      data.forEach(section => {
        const titleSection = addTitleSection(section.title);
        section.videos.forEach(video => addVideo(titleSection.querySelector('.video-container'), video));
      });
    }

    function addTitleSection(initialTitle = '') {
      const container = document.getElementById('title-sections-container');

      const titleSection = document.createElement('div');
      titleSection.className = 'title-section bg-white p-4 rounded shadow relative';

      const deleteTitleButton = document.createElement('button');
      deleteTitleButton.type = 'button';
      deleteTitleButton.textContent = '✖';
      deleteTitleButton.className = 'absolute top-0 right-2 text-whites text-red-500';
      deleteTitleButton.addEventListener('click', () => {
        titleSection.remove();
        updateData();
      });
      titleSection.appendChild(deleteTitleButton);

      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.placeholder = 'Enter title';
      titleInput.value = typeof initialTitle === 'string' ? initialTitle : '';
      titleInput.className = 'w-full mb-2 p-2 border rounded mt-4';
      titleInput.addEventListener('input', updateData);
      titleSection.appendChild(titleInput);

      const videoContainer = document.createElement('div');
      videoContainer.className = 'video-container space-y-2 pb-2';
      titleSection.appendChild(videoContainer);

      const addVideoButton = document.createElement('button');
      addVideoButton.type = 'button';
      addVideoButton.textContent = 'Add Video';
      addVideoButton.className = 'bg-green-600 text-white px-3 py-1 rounded mr-2 hover:bg-green-600';
      addVideoButton.addEventListener('click', () => addVideo(videoContainer));
      titleSection.appendChild(addVideoButton);

      container.appendChild(titleSection);
      updateData();
      return titleSection;
    }

    function addVideo(container, initialVideo = '') {
      const videoSection = document.createElement('div');
      videoSection.className = 'video-section bg-gray-100 p-3 rounded border flex items-center space-x-2';

      const videoLinkInput = document.createElement('input');
      videoLinkInput.type = 'text';
      videoLinkInput.placeholder = 'Enter video link';
      videoLinkInput.value = typeof initialVideo === 'string' ? initialVideo : '';
      videoLinkInput.className = 'flex-grow p-2 border rounded';
      videoLinkInput.addEventListener('input', updateData);
      videoSection.appendChild(videoLinkInput);

      const deleteVideoButton = document.createElement('button');
      deleteVideoButton.type = 'button';
      deleteVideoButton.textContent = 'Delete Video';
      deleteVideoButton.className = 'bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600';
      deleteVideoButton.addEventListener('click', () => {
        videoSection.remove();
        updateData();
      });
      videoSection.appendChild(deleteVideoButton);

      container.appendChild(videoSection);
      updateData();
    }

    function updateData() {
      const titleSections = document.querySelectorAll('.title-section');
      const data = Array.from(titleSections).map(section => {
        const title = section.querySelector('input[type="text"]').value;
        const videos = Array.from(section.querySelectorAll('.video-container .video-section input[type="text"]')).map(input => input.value);
        return { title, videos };
      });
      const hiddenInput = document.getElementById('videos');
      hiddenInput.value = JSON.stringify(data);
    //   console.log(data); // Logs the data whenever it updates
    }
};




document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedRegion = urlParams.get("region");
    const selectedSeason = urlParams.get("season");
    if (selectedRegion) {
        document.querySelectorAll('input[name="region"]').forEach(input => {
            if (input.value === selectedRegion) {
                input.checked = true;
            }
        });
    }
    if (selectedSeason){
        document.querySelectorAll('input[name="season"]').forEach(input => {
            if (input.value === selectedSeason) {
                input.checked = true;
            }
        });
    }

    document.querySelectorAll('input[name="region"]').forEach(input => {
        input.addEventListener('change', function() {
            if (this.checked) {
                const selectedRegion = this.value.replace("%2520", "%20"); // Ensure proper encoding
                const url = new URL(window.location.href);
                url.searchParams.set('region', selectedRegion);
                window.location.href = url;
            }
        });
    });

    document.querySelectorAll('input[name="season"]').forEach(input => {
        input.addEventListener('change', function() {
            if (this.checked) {
                const selectedSeason = this.value
                const url = new URL(window.location.href);
                url.searchParams.set('season', selectedSeason);
                window.location.href = url;
            }
        });
    });
});
