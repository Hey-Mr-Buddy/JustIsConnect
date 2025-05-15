function scrollToRangeOfServices() {
    const services = document.getElementById('servicesSectionForJS');
    if (services) {
        services.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}