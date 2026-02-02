// ========== ADD/EDIT PLANTS HERE ==========
// To add a new plant: Just copy a line and change the values
// To change a plant's family: Just edit the family field
// To remove a plant: Delete the line

const plants = [
    { name: "Sunflower", codename: "sunflower", family: "Enlighten-mint" },
    { name: "Peashooter", codename: "peashooter", family: "Appease-mint" },
    { name: "Wall-nut", codename: "wallnut", family: "Reinforce-mint" },
    { name: "Potato Mine", codename: "potatomine", family: "Bombard-mint" },
    { name: "Cabbage-pult", codename: "cabbagepult", family: "Arma-mint" },
    { name: "Bloomerang", codename: "bloomerang", family: "Spear-mint" },
    { name: "Iceberg Lettuce", codename: "iceburg", family: "Winter-mint" },
    { name: "Grave Buster", codename: "gravebuster", family: "Contain-mint" },
    { name: "Twin Sunflower", codename: "twinsunflower", family: "Enlighten-mint" },
    { name: "Bonk Choy", codename: "bonkchoy", family: "Enforce-mint" },
    { name: "Repeater", codename: "repeater", family: "Appease-mint" },
    { name: "Iceweed", codename: "iceweed", family: "Winter-mint" },
    { name: "Snowdrop", codename: "snowdrop", family: "Winter-mint" },
    { name: "Squash", codename: "squash", family: "Enforce-mint" },
    { name: "Dandelion", codename: "dandelion", family: "Appease-mint" },
    { name: "Pea Vine", codename: "pvine", family: "Appease-mint" },
    { name: "Kernel-pult", codename: "kernelpult", family: "Arma-mint" },
    { name: "Snapdragon", codename: "snapdragon", family: "Pepper-mint" },
    { name: "Spikeweed", codename: "spikeweed", family: "Spear-mint" },
    { name: "Coconut Cannon", codename: "coconutcannon", family: "Arma-mint" },
    { name: "Cherry Bomb", codename: "cherry_bomb", family: "Bombard-mint" },
    { name: "Spring Bean", codename: "springbean", family: "Contain-mint" },
    { name: "Spikerock", codename: "spikerock", family: "Spear-mint" },
    { name: "Threepeater", codename: "threepeater", family: "Appease-mint" },
    { name: "Buttercup", codename: "buttercup", family: "Contain-mint" },
    { name: "Split Pea", codename: "splitpea", family: "Appease-mint" },
    { name: "Chili Bean", codename: "chilibean", family: "Ail-mint" },
    { name: "Lightning Reed", codename: "lightningreed", family: "Fila-mint" },
    { name: "Tall-nut", codename: "tallnut", family: "Reinforce-mint" },
    { name: "Jalapeno", codename: "jalapeno", family: "Pepper-mint" },
    { name: "Pea Pod", codename: "peapod", family: "Appease-mint" },
    { name: "Melon-pult", codename: "melonpult", family: "Arma-mint" },
    { name: "Winter Melon", codename: "wintermelon", family: "Winter-mint" },
    { name: "Imitater", codename: "imitater", family: "None" },
    { name: "Electric Peashooter", codename: "electricpeashooter", family: "Fila-mint" },
    { name: "Sap-fling", codename: "sapfling", family: "Contain-mint" },
    { name: "Electric Currant", codename: "electriccurrant", family: "Fila-mint" },
    { name: "Marigold", codename: "marigold", family: "Contain-mint" },
    { name: "Laser Bean", codename: "laser_bean", family: "Spear-mint" },
    { name: "Blover", codename: "blover", family: "Contain-mint" },
    { name: "Citron", codename: "citron", family: "Fila-mint" },
    { name: "E.M. Peach", codename: "empea", family: "Fila-mint" },
    { name: "Starfruit", codename: "starfruit", family: "Appease-mint" },
    { name: "Angel Starfruit", codename: "pinkstarfruit", family: "Appease-mint" },
    { name: "Shooting Starfruit", codename: "shootingstarfruit", family: "Appease-mint" },
    { name: "Infi-nut", codename: "holonut", family: "Reinforce-mint" },
    { name: "Magnifying Grass", codename: "magnifyinggrass", family: "Enlighten-mint" },
    { name: "Tile Turnip", codename: "powerplant", family: "None" },
    { name: "Apple Mortar", codename: "applemortar", family: "Arma-mint" },
    { name: "Solar Tomato", codename: "solartomato", family: "Enlighten-mint" },
    { name: "Pumpkin", codename: "pumpkin", family: "Reinforce-mint" },
    { name: "Holly Knight", codename: "hollyknight", family: "Reinforce-mint" },
    { name: "Gumnut", codename: "gumnut", family: "Reinforce-mint" },
    { name: "Hypno-shroom", codename: "hypnoshroom", family: "Enchant-mint" },
    { name: "Sun-shroom", codename: "sunshroom", family: "Enlighten-mint" },
    { name: "Puff-shroom", codename: "puffshroom", family: "Ail-mint" },
    { name: "Fume-shroom", codename: "fumeshroom", family: "Ail-mint" },
    { name: "Sun Bean", codename: "sunbean", family: "Enlighten-mint" },
    { name: "Pea-nut", codename: "peanut", family: "Reinforce-mint" },
    { name: "Magnet-shroom", codename: "magnetshroom", family: "Contain-mint" },
    { name: "Scaredy Shroom", codename: "scaredyshroom", family: "Ail-mint" },
    { name: "Plantern", codename: "plantern", family: "Enlighten-mint" },
    { name: "Vamporcini", codename: "vamporcini", family: "Ail-mint" },
    { name: "Ice-shroom", codename: "glaciershroom", family: "Winter-mint" },
    { name: "Doom-shroom", codename: "doomshroom", family: "Bombard-mint" },
    { name: "Lily Pad", codename: "lilypad", family: "None" },
    { name: "Tangle Kelp", codename: "tanglekelp", family: "Enforce-mint" },
    { name: "Bowling Bulb", codename: "bowlingbulb", family: "Appease-mint" },
    { name: "Homing Thistle", codename: "homingthistle", family: "Spear-mint" },
    { name: "Guacodile", codename: "guacodile", family: "Enforce-mint" },
    { name: "Banana Launcher", codename: "banana", family: "Arma-mint" },
    { name: "Sea-shroom", codename: "seashroom", family: "Ail-mint" },
    { name: "Chomper", codename: "chomper", family: "Enforce-mint" },
    { name: "Missile Toe", codename: "missiletoe", family: "Winter-mint" },
    { name: "Ghost Pepper", codename: "ghostpepper", family: "Pepper-mint" },
    { name: "Parsnip", codename: "parsnip", family: "Enforce-mint" },
    { name: "Ice Bloom", codename: "icebloom", family: "Winter-mint" },
    { name: "Hurrikale", codename: "hurrikale", family: "Contain-mint" },
    { name: "Hot Potato", codename: "hotpotato", family: "Pepper-mint" },
    { name: "Pepper-pult", codename: "pepperpult", family: "Pepper-mint" },
    { name: "Chard Guard", codename: "chardguard", family: "Reinforce-mint" },
    { name: "Fire Peashooter", codename: "firepeashooter", family: "Pepper-mint" },
    { name: "Stunion", codename: "stunion", family: "Contain-mint" },
    { name: "Rotobaga", codename: "xshot", family: "Appease-mint" },
    { name: "Pyre Vine", codename: "pyrevine", family: "Pepper-mint" },
    { name: "Jack O' Lantern", codename: "jackolantern", family: "Pepper-mint" },
    { name: "Sweet Potato", codename: "sweetpotato", family: "Reinforce-mint" },
    { name: "Hot Date", codename: "hotdate", family: "Pepper-mint" },
    { name: "Gatling Pea", codename: "gatling", family: "Appease-mint" },
    { name: "Mega Gatling Pea", codename: "megagatling", family: "Appease-mint" },
    { name: "Torchwood", codename: "torchwood", family: "Appease-mint" },
    { name: "Lava Guava", codename: "lavaguava", family: "Pepper-mint" },
    { name: "Red Stinger", codename: "redstinger", family: "Appease-mint" },
    { name: "A.K.E.E.", codename: "akee", family: "Arma-mint" },
    { name: "Endurian", codename: "endurian", family: "Reinforce-mint" },
    { name: "Toadstool", codename: "toadstool", family: "Enlighten-mint" },
    { name: "Stallia", codename: "stallia", family: "Contain-mint" },
    { name: "Gold Leaf", codename: "goldleaf", family: "None" },
    { name: "Zoybean Pod", codename: "zoybeanpod", family: "Enchant-mint" },
    { name: "Aloe", codename: "aloe", family: "Reinforce-mint" },
    { name: "Shine Vine", codename: "shinevine", family: "Enlighten-mint" },
    { name: "Skyshooter", codename: "skyshooter", family: "Appease-mint" },
    { name: "Moon Bean", codename: "moonbean", family: "Enlighten-mint" },
    { name: "Floawer Pot", codename: "floawerPot", family: "None" },
    { name: "Fire Gourd", codename: "firegourd", family: "Pepper-mint" },
    { name: "Snow Pea", codename: "snowpea", family: "Winter-mint" },
    { name: "Bamboo Shoot", codename: "bambooshoot", family: "Spear-mint" },
    { name: "Resistant Radish", codename: "turnip", family: "Reinforce-mint" },
    { name: "Heavenly Peach", codename: "peach", family: "Reinforce-mint" },
    { name: "Power Lily", codename: "powerlily", family: "None" },
    { name: "Lychee", codename: "lychee", family: "Reinforce-mint" },
    { name: "Solar Sage", codename: "solarsage", family: "Enlighten-mint" },
    { name: "Cantaloupe-pult", codename: "cantaloupe", family: "Arma-mint" },
    { name: "Bamboozle", codename: "bamboozle", family: "Reinforce-mint" },
    { name: "Atomic Bombegranate", codename: "atombomb_seedling", family: "Bombard-mint" },
    { name: "Strawburst", codename: "strawburst", family: "Bombard-mint" },
    { name: "Cactus", codename: "cactus", family: "Spear-mint" },
    { name: "Phat Beet", codename: "phatbeet", family: "Enforce-mint" },
    { name: "Celery Stalker", codename: "celerystalker", family: "Enforce-mint" },
    { name: "Thyme Warp", codename: "thymewarp", family: "None" },
    { name: "Electric Blueberry", codename: "electricblueberry", family: "Fila-mint" },
    { name: "Garlic", codename: "garlic", family: "Ail-mint" },
    { name: "Spore-shroom", codename: "sporeshroom", family: "Ail-mint" },
    { name: "Intensive Carrot", codename: "intensivecarrot", family: "Enchant-mint" },
    { name: "Caulipower", codename: "caulipower", family: "Enchant-mint" },
    { name: "Blooming Heart", codename: "bloominghearts", family: "Ail-mint" },
    { name: "Grapeshot", codename: "grapeshot", family: "Bombard-mint" },
    { name: "Primal Peashooter", codename: "primalpeashooter", family: "Appease-mint" },
    { name: "Primal Wall-nut", codename: "primalwallnut", family: "Reinforce-mint" },
    { name: "Perfume-shroom", codename: "perfumeshroom", family: "None" },
    { name: "Cold Snapdragon", codename: "coldsnapdragon", family: "Winter-mint" },
    { name: "Primal Sunflower", codename: "primalsunflower", family: "Enlighten-mint" },
    { name: "Primal Potato Mine", codename: "primalpotatomine", family: "Bombard-mint" },
    { name: "Shrinking Violet", codename: "shrinkingviolet", family: "Enchant-mint" },
    { name: "Meteor Flower", codename: "meteorflower", family: "Pepper-mint" },
    { name: "Explode-O-Nut", codename: "explodeonut", family: "Bombard-mint" },
    { name: "Moonflower", codename: "moonflower", family: "Conceal-mint" },
    { name: "Nightshade", codename: "nightshade", family: "Conceal-mint" },
    { name: "Shadow-shroom", codename: "shadowshroom", family: "Conceal-mint" },
    { name: "Dusk Lobber", codename: "dusklobber", family: "Conceal-mint" },
    { name: "Grimrose", codename: "grimrose", family: "Conceal-mint" },
    { name: "Gold Bloom", codename: "goldbloom", family: "Enlighten-mint" },
    { name: "Escape Root", codename: "escaperoot", family: "Bombard-mint" },
    { name: "Gloom Vine", codename: "gloomvine", family: "Conceal-mint" },
    { name: "Gloom-shroom", codename: "gloomshroom", family: "Conceal-mint" },
    { name: "Umbrella Leaf", codename: "umbrellaleaf", family: "Reinforce-mint" },
    { name: "Dragon Bruit", codename: "dragonbruit", family: "Conceal-mint" },
    { name: "Cran Jelly", codename: "cranjelly", family: "Contain-mint" },
    { name: "Appease-mint", codename: "appeasemint", family: "Appease-mint" },
    { name: "Enlighten-mint", codename: "enlightenmint", family: "Enlighten-mint" },
    { name: "Reinforce-mint", codename: "reinforcemint", family: "Reinforce-mint" },
    { name: "Bombard-mint", codename: "bombardmint", family: "Bombard-mint" },
    { name: "Spear-mint", codename: "spearmint", family: "Spear-mint" },
    { name: "Winter-mint", codename: "wintermint", family: "Winter-mint" },
    { name: "Enforce-mint", codename: "enforcemint", family: "Enforce-mint" },
    { name: "Pepper-mint", codename: "peppermint", family: "Pepper-mint" },
    { name: "Ail-mint", codename: "ailmint", family: "Ail-mint" },
    { name: "Enchant-mint", codename: "enchantmint", family: "Enchant-mint" },
    { name: "Conceal-mint", codename: "concealmint", family: "Conceal-mint" }
];

// ========== HELPER FUNCTIONS ==========

// Get image URL for a plant
function getPlantImageUrl(codename) {
    return `https://www.pvzge.com/assets/image/plants/plants_${codename}_c.webp`;
}

// Get family icon URL
function getFamilyIconUrl(family) {
    return `https://www.pvzge.com/assets/wikicon/${family}_familyicon.webp`;
}

// Display all plants in grid
function displayAllPlants(plantsToShow = plants) {
    const plantGrid = document.getElementById('plantGrid');
    
    plantGrid.innerHTML = plantsToShow.map(plant => {
        const isDeselected = deselectedPlants.has(plant.codename);
        const deselectedClass = isDeselected ? ' deselected' : '';
        
        return `
            <div class="plant-item${deselectedClass}" onclick="togglePlantSelection('${plant.codename}')">
                <div class="plant-family" title="${plant.family}">
                    <img src="${getFamilyIconUrl(plant.family)}" alt="${plant.family}" class="family-icon">
                </div>
                <img src="${getPlantImageUrl(plant.codename)}" alt="${plant.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect width=%22100%22 height=%22100%22 fill=%22%23333%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23fff%22 font-size=%2212%22%3E?%3C/text%3E%3C/svg%3E'">
                <p class="plant-name">${plant.name}</p>
            </div>
        `;
    }).join('');
}


// Get unique families
function getUniqueFamilies() {
    const families = [...new Set(plants.map(p => p.family))];
    return families.sort();
}

// Create family filter icons
function createFamilyFilters() {
    const familyFiltersDiv = document.getElementById('familyFilters');
    const families = getUniqueFamilies();
    
    familyFiltersDiv.innerHTML = families.map(family => `
        <img src="${getFamilyIconUrl(family)}" 
             alt="${family}" 
             title="${family}"
             class="family-filter-icon" 
             data-family="${family}"
             onclick="toggleFamilyFilter('${family}')">
    `).join('');
}

// Track current active filter
let activeFamily = null;

// Track deselected plants
let deselectedPlants = new Set();

// Toggle plant selection
function togglePlantSelection(codename) {
    if (deselectedPlants.has(codename)) {
        deselectedPlants.delete(codename);
    } else {
        deselectedPlants.add(codename);
    }
    
    // Re-render to update visual state
    if (activeFamily) {
        const filteredPlants = plants.filter(p => p.family === activeFamily);
        displayAllPlants(filteredPlants);
    } else {
        displayAllPlants();
    }
}

// Toggle family filter
function toggleFamilyFilter(family) {
    const filterIcons = document.querySelectorAll('.family-filter-icon');
    
    if (activeFamily === family) {
        // Deactivate current filter
        activeFamily = null;
        filterIcons.forEach(icon => icon.classList.remove('active'));
        displayAllPlants();
    } else {
        // Activate new filter
        activeFamily = family;
        filterIcons.forEach(icon => {
            if (icon.dataset.family === family) {
                icon.classList.add('active');
            } else {
                icon.classList.remove('active');
            }
        });
        
        // Filter and display plants
        const filteredPlants = plants.filter(p => p.family === family);
        displayAllPlants(filteredPlants);
    }
}

// Event listeners
document.getElementById('showAllBtn').addEventListener('click', () => {
    activeFamily = null;
    document.querySelectorAll('.family-filter-icon').forEach(icon => {
        icon.classList.remove('active');
    });
    displayAllPlants();
});

document.getElementById('newBtn').addEventListener('click', () => {
    // Switch to randomizer view
    document.getElementById('selectionView').classList.remove('active');
    document.getElementById('randomizerView').classList.add('active');
});

document.getElementById('showAllBtn').addEventListener('click', () => {
    // Switch back to selection view
    document.getElementById('randomizerView').classList.remove('active');
    document.getElementById('selectionView').classList.add('active');
    
    // Reset filters
    activeFamily = null;
    document.querySelectorAll('.family-filter-icon').forEach(icon => {
        icon.classList.remove('active');
    });
    displayAllPlants();
});

// Randomizer functionality
let usedPlants = [];
let requiredFamiliesSet = new Set();

// Create required families panel
function createRequiredFamiliesPanel() {
    const panel = document.getElementById('requiredFamilies');
    const families = getUniqueFamilies();
    
    panel.innerHTML = families.map(family => `
        <img src="${getFamilyIconUrl(family)}" 
             alt="${family}" 
             title="${family}"
             class="required-family-icon" 
             data-family="${family}"
             onclick="toggleRequiredFamily('${family}')">
    `).join('');
}

// Toggle required family
function toggleRequiredFamily(family) {
    if (requiredFamiliesSet.has(family)) {
        requiredFamiliesSet.delete(family);
    } else {
        if (requiredFamiliesSet.size >= 8) {
            alert('You can only select up to 8 families (one per cell)!');
            return;
        }
        requiredFamiliesSet.add(family);
    }
    
    // Update visual state
    const icons = document.querySelectorAll('.required-family-icon');
    icons.forEach(icon => {
        if (icon.dataset.family === family) {
            icon.classList.toggle('selected');
        }
    });
}

// Clear all required families
function clearRequiredFamilies() {
    requiredFamiliesSet.clear();
    const icons = document.querySelectorAll('.required-family-icon');
    icons.forEach(icon => {
        icon.classList.remove('selected');
    });
}

document.getElementById('clearFamiliesBtn').addEventListener('click', clearRequiredFamilies);

document.getElementById('getPacketsBtn').addEventListener('click', () => {
    const cells = document.querySelectorAll('.randomizer-cell');
    const selectedPlants = plants.filter(p => !deselectedPlants.has(p.codename));
    const bwbLevelEnabled = document.getElementById('bwbLevelToggle').checked;
    
    if (selectedPlants.length === 0) {
        alert('Please select at least one plant!');
        return;
    }
    
    if (selectedPlants.length < 8) {
        alert('Please select at least 8 plants!');
        return;
    }
    
    // BWB Level will force Lily Pad even if greyed out, no need to check
    
    // Check if there are enough plants for required families
    if (requiredFamiliesSet.size > 0) {
        for (let family of requiredFamiliesSet) {
            const plantsInFamily = selectedPlants.filter(p => p.family === family);
            if (plantsInFamily.length === 0) {
                alert(`No plants available in ${family} family! Please select plants from this family or deselect it.`);
                return;
            }
        }
    }
    
    // Reset used plants for new roll
    usedPlants = [];
    
    // Pre-assign plants from required families
    const requiredFamiliesArray = Array.from(requiredFamiliesSet);
    const preAssignedCells = new Set();
    
    requiredFamiliesArray.forEach((family, idx) => {
        if (idx < 8) {
            preAssignedCells.add(idx);
        }
    });
    
    cells.forEach((cell, index) => {
        animateCell(cell, selectedPlants, index, requiredFamiliesArray, preAssignedCells, bwbLevelEnabled);
    });
});

function animateCell(cell, availablePlants, cellIndex, requiredFamiliesArray, preAssignedCells, bwbLevelEnabled) {
    cell.classList.add('spinning');
    let iterations = 0;
    const maxIterations = 20 + (cellIndex * 5); // Each cell spins different amounts
    
    const interval = setInterval(() => {
        const randomPlant = availablePlants[Math.floor(Math.random() * availablePlants.length)];
        cell.innerHTML = `<img src="${getPlantImageUrl(randomPlant.codename)}" alt="${randomPlant.name}">`;
        
        iterations++;
        
        if (iterations >= maxIterations) {
            clearInterval(interval);
            cell.classList.remove('spinning');
            
            // Get available plants (not yet used)
            let finalAvailablePlants = availablePlants.filter(p => !usedPlants.includes(p.codename));
            
            // BWB Level: Guarantee Lily Pad in the last cell (cell 7), even if greyed out
            if (bwbLevelEnabled && cellIndex === 7 && !usedPlants.includes('lilypad')) {
                const lilyPad = plants.find(p => p.codename === 'lilypad');
                if (lilyPad) {
                    cell.innerHTML = `<img src="${getPlantImageUrl(lilyPad.codename)}" alt="${lilyPad.name}">`;
                    usedPlants.push(lilyPad.codename);
                    return;
                }
            }
            
            // If this cell needs to fulfill a required family
            if (preAssignedCells.has(cellIndex) && cellIndex < requiredFamiliesArray.length) {
                const requiredFamily = requiredFamiliesArray[cellIndex];
                finalAvailablePlants = finalAvailablePlants.filter(p => p.family === requiredFamily);
            }
            
            // Rule: Potato Mine cannot be picked first (cell 0)
            if (cellIndex === 0) {
                finalAvailablePlants = finalAvailablePlants.filter(p => p.codename !== 'potatomine');
            }
            
            // Final selection
            if (finalAvailablePlants.length > 0) {
                const finalPlant = finalAvailablePlants[Math.floor(Math.random() * finalAvailablePlants.length)];
                cell.innerHTML = `<img src="${getPlantImageUrl(finalPlant.codename)}" alt="${finalPlant.name}">`;
                usedPlants.push(finalPlant.codename);
            }
        }
    }, 50); // Change plant every 50ms
}

// Initial display
createFamilyFilters();
displayAllPlants();
createRequiredFamiliesPanel();
