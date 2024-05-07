document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download-resume').addEventListener('click', function() {
        var link = document.createElement('a');
        link.setAttribute('href', 'assets/resume/Sahil_Agrawal_Resume.pdf');
        link.setAttribute('download', 'Sahil_Agrawal_Resume.pdf');
        link.target = "_blank"; // Open in a new tab
        link.click();
    });
});
