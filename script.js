document.addEventListener("DOMContentLoaded", function() {
    // Download button click event
    var downloadButton = document.getElementById("start-button");
    downloadButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Add your download logic here
        // Replace the link below with your desired download link
        window.location.href = "https://drive.google.com/file/d/1S79G0PI0EoTMcV5FsXu_E_HNp__gQGPb/view?usp=drive_link";
    });
});

