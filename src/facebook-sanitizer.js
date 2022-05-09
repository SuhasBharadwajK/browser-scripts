const removeReels = () => {
    // Wait for the page render cycle to complete using setTimeout.
    setTimeout(() => {
        // Get all the icon elements
        let icons = $('i').toArray();

        if (icons && icons.length) {
            // Iterate over all the icon elements found
            icons.forEach((e, i) => {
                const sibling = e.nextElementSibling;
                // Check if the sibling of an icon element has text of Reels and short videos" inside it.
                if (sibling && sibling.innerText.toLowerCase() === 'reels and short videos') {

                    // Find the parent news feed elements of the advertisement links
                    let reelsBox = e.closest('div[data-pagelet="FeedUnit_{n}"]');

                    if (!reelsBox) {
                        reelsBox = e.closest('div[data-pagelet="FeedUnit_1"]');
                    }

                    if (reelsBox) {
                        // Delete the newsfeed element
                        reelsBox.remove();
                        console.log("Removed a pesky reels suggestion ✅");
                    }
                }
            });
        }
    });
};

const removeAds = () => {
    // Wait for the page render cycle to complete using setTimeout.
    setTimeout(() => {
        // Get all the anchor tags
        const anchors = $('a').toArray();
    
        if (anchors && anchors.length) {
            anchors?.forEach(anchor => {
                // Check if the href attributes and it starts with /ads/
                if (anchor?.attributes['href']?.value?.startsWith('/ads/')) {
    
                    // Find the parent news feed elements of the advertisement links
                    let adElement = anchor.closest('div[data-pagelet="FeedUnit_{n}"]');
    
                    if (!adElement) {
                        adElement = anchor.closest('div[data-pagelet="FeedUnit_1"]');
                    }
    
                    if (adElement) {
                        // Delete the news feed elements containing the ads
                        adElement.remove();
                        console.log("Removed an irritating ad ✅");
                    }
                }
            });
        }
    });
};

document.addEventListener('scroll', () => {
    console.log("Looking for annoying ads and reels 👀");
    removeReels();
    removeAds();
}, true);
