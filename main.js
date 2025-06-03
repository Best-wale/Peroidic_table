  // Check for dark mode preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                if (event.matches) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            });
const elements = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "mass": "1.008",
    "category": "diatomic nonmetal",
    "period": 1,
    "group": 1,
    "electron": "1s1",
    "description": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg",
    "source": "https://en.wikipedia.org/wiki/Hydrogen"
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "mass": "4.0026022",
    "category": "noble gas",
    "period": 1,
    "group": 18,
    "electron": "1s2",
    "description": "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg",
    "source": "https://en.wikipedia.org/wiki/Helium"
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "mass": "6.94",
    "category": "alkali metal",
    "period": 2,
    "group": 1,
    "electron": "1s2 2s1",
    "description": "Lithium (from Greek:\u03bb\u03af\u03b8\u03bf\u03c2 lithos, \"stone\") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg",
    "source": "https://en.wikipedia.org/wiki/Lithium"
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "mass": "9.01218315",
    "category": "alkaline earth metal",
    "period": 2,
    "group": 2,
    "electron": "1s2 2s2",
    "description": "Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Beryllium_%28Be%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Beryllium"
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "mass": "10.81",
    "category": "metalloid",
    "period": 2,
    "group": 13,
    "electron": "1s2 2s2 2p1",
    "description": "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Boron.jpg",
    "source": "https://en.wikipedia.org/wiki/Boron"
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "mass": "12.011",
    "category": "polyatomic nonmetal",
    "period": 2,
    "group": 14,
    "electron": "1s2 2s2 2p2",
    "description": "Carbon (from Latin:carbo \"coal\") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent\u2014making four electrons available to form covalent chemical bonds.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/68/Pure_Carbon.png",
    "source": "https://en.wikipedia.org/wiki/Carbon"
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "mass": "14.007",
    "category": "diatomic nonmetal",
    "period": 2,
    "group": 15,
    "electron": "1s2 2s2 2p3",
    "description": "Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nitrogen-glow.jpg",
    "source": "https://en.wikipedia.org/wiki/Nitrogen"
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "mass": "15.999",
    "category": "diatomic nonmetal",
    "period": 2,
    "group": 16,
    "electron": "1s2 2s2 2p4",
    "description": "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Liquid_oxygen_in_a_beaker_%28cropped_and_retouched%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Oxygen"
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "mass": "18.9984031636",
    "category": "diatomic nonmetal",
    "period": 2,
    "group": 17,
    "electron": "1s2 2s2 2p5",
    "description": "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Fluoro_liquido_a_-196%C2%B0C_1.jpg",
    "source": "https://en.wikipedia.org/wiki/Fluorine"
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "mass": "20.17976",
    "category": "noble gas",
    "period": 2,
    "group": 18,
    "electron": "1s2 2s2 2p6",
    "description": "Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Neon-glow.jpg",
    "source": "https://en.wikipedia.org/wiki/Neon"
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodium",
    "mass": "22.989769282",
    "category": "alkali metal",
    "period": 3,
    "group": 1,
    "electron": "1s2 2s2 2p6 3s1",
    "description": "Sodium /\u02c8so\u028adi\u0259m/ is a chemical element with symbol Na (from Ancient Greek \u039d\u03ac\u03c4\u03c1\u03b9\u03bf) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/Na_%28Sodium%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Sodium"
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "mass": "24.305",
    "category": "alkaline earth metal",
    "period": 3,
    "group": 2,
    "electron": "1s2 2s2 2p6 3s2",
    "description": "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Magnesium_crystals.jpg",
    "source": "https://en.wikipedia.org/wiki/Magnesium"
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "mass": "26.98153857",
    "category": "post-transition metal",
    "period": 3,
    "group": 13,
    "electron": "1s2 2s2 2p6 3s2 3p1",
    "description": "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Aluminium.jpg",
    "source": "https://en.wikipedia.org/wiki/Aluminium"
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicon",
    "mass": "28.085",
    "category": "metalloid",
    "period": 3,
    "group": 14,
    "electron": "1s2 2s2 2p6 3s2 3p2",
    "description": "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg",
    "source": "https://en.wikipedia.org/wiki/Silicon"
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "mass": "30.9737619985",
    "category": "polyatomic nonmetal",
    "period": 3,
    "group": 15,
    "electron": "1s2 2s2 2p6 3s2 3p3",
    "description": "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms\u2014white phosphorus and red phosphorus\u2014but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Phosphorus-purple.jpg",
    "source": "https://en.wikipedia.org/wiki/Phosphorus"
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Sulfur",
    "mass": "32.06",
    "category": "polyatomic nonmetal",
    "period": 3,
    "group": 16,
    "electron": "1s2 2s2 2p6 3s2 3p4",
    "description": "Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Native_sulfur_%28Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia%29_9.jpg",
    "source": "https://en.wikipedia.org/wiki/Sulfur"
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "mass": "35.45",
    "category": "diatomic nonmetal",
    "period": 3,
    "group": 17,
    "electron": "1s2 2s2 2p6 3s2 3p5",
    "description": "Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chlorine-sample-flip.jpg",
    "source": "https://en.wikipedia.org/wiki/Chlorine"
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argon",
    "mass": "39.9481",
    "category": "noble gas",
    "period": 3,
    "group": 18,
    "electron": "1s2 2s2 2p6 3s2 3p6",
    "description": "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Argon-glow.jpg",
    "source": "https://en.wikipedia.org/wiki/Argon"
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potassium",
    "mass": "39.09831",
    "category": "alkali metal",
    "period": 4,
    "group": 1,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s1",
    "description": "Potassium is a chemical element with symbol K (derived from Neo-Latin, kalium) and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name is derived. In the Periodic table, potassium is one of seven elements in column (group) 1 (alkali metals):they all have a single valence electron in their outer electron shell, which they readily give up to create an atom with a positive charge - a cation, and combine with anions to form salts.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Potassium.JPG",
    "source": "https://en.wikipedia.org/wiki/Potassium"
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "mass": "40.0784",
    "category": "alkaline earth metal",
    "period": 4,
    "group": 2,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2",
    "description": "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust. The ion Ca2+ is also the fifth-most-abundant dissolved ion in seawater by both molarity and mass, after sodium, chloride, magnesium, and sulfate.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/72/Calcium.jpg",
    "source": "https://en.wikipedia.org/wiki/Calcium"
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "mass": "44.9559085",
    "category": "transition metal",
    "period": 4,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
    "description": "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare earth element, together with yttrium and the lanthanoids. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Scandium%2C_Sc.jpg",
    "source": "https://en.wikipedia.org/wiki/Scandium"
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "mass": "47.8671",
    "category": "transition metal",
    "period": 4,
    "group": 4,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
    "description": "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Titanium.jpg",
    "source": "https://en.wikipedia.org/wiki/Titanium"
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadium",
    "mass": "50.94151",
    "category": "transition metal",
    "period": 4,
    "group": 5,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
    "description": "Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Vanadium-pieces.jpg",
    "source": "https://en.wikipedia.org/wiki/Vanadium"
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "mass": "51.99616",
    "category": "transition metal",
    "period": 4,
    "group": 6,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
    "description": "Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle metal which takes a high polish, resists tarnishing, and has a high melting point.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chromium.jpg",
    "source": "https://en.wikipedia.org/wiki/Chromium"
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "mass": "54.9380443",
    "category": "transition metal",
    "period": 4,
    "group": 7,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
    "description": "Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in combination with iron, and in many minerals. Manganese is a metal with important industrial metal alloy uses, particularly in stainless steels.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/64/Manganese_element.jpg",
    "source": "https://en.wikipedia.org/wiki/Manganese"
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Iron",
    "mass": "55.8452",
    "category": "transition metal",
    "period": 4,
    "group": 8,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
    "description": "Iron is a chemical element with symbol Fe (from Latin:ferrum) and atomic number 26. It is a metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
    "image": "https://images-of-elements.com/iron-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Iron"
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "mass": "58.9331944",
    "category": "transition metal",
    "period": 4,
    "group": 9,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
    "description": "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt in the Earth's crust is found only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/62/Cobalt_ore_2.jpg",
    "source": "https://en.wikipedia.org/wiki/Cobalt"
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "mass": "58.69344",
    "category": "transition metal",
    "period": 4,
    "group": 10,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
    "description": "Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/57/Nickel_chunk.jpg",
    "source": "https://en.wikipedia.org/wiki/Nickel"
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Copper",
    "mass": "63.5463",
    "category": "transition metal",
    "period": 4,
    "group": 11,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s1 3d10",
    "description": "Copper is a chemical element with symbol Cu (from Latin:cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/NatCopper.jpg",
    "source": "https://en.wikipedia.org/wiki/Copper"
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "mass": "65.382",
    "category": "transition metal",
    "period": 4,
    "group": 12,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
    "description": "Zinc, in commerce also spelter, is a chemical element with symbol Zn and atomic number 30. It is the first element of group 12 of the periodic table. In some respects zinc is chemically similar to magnesium:its ion is of similar size and its only common oxidation state is +2.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Zinc_%2830_Zn%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Zinc"
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "mass": "69.7231",
    "category": "post-transition metal",
    "period": 4,
    "group": 13,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
    "description": "Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium does not occur in free form in nature, but as the gallium(III) compounds that are in trace amounts in zinc ores and in bauxite. Gallium is a soft, silvery metal, and elemental gallium is a brittle solid at low temperatures, and melts at 29.76 \u00b0C (85.57 \u00b0F) (slightly above room temperature).",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Solid_gallium_%28Ga%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Gallium"
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "mass": "72.6308",
    "category": "metalloid",
    "period": 4,
    "group": 14,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
    "description": "Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon. Purified germanium is a semiconductor, with an appearance most similar to elemental silicon.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Polycrystalline-germanium.jpg",
    "source": "https://en.wikipedia.org/wiki/Germanium"
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsenic",
    "mass": "74.9215956",
    "category": "metalloid",
    "period": 4,
    "group": 15,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
    "description": "Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in conjunction with sulfur and metals, and also as a pure elemental crystal. Arsenic is a metalloid.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Arsenic_%2833_As%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Arsenic"
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenium",
    "mass": "78.9718",
    "category": "polyatomic nonmetal",
    "period": 4,
    "group": 16,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
    "description": "Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between those of its periodic table column-adjacent chalcogen elements sulfur and tellurium. It rarely occurs in its elemental state in nature, or as pure ore compounds.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Selenium.jpg",
    "source": "https://en.wikipedia.org/wiki/Selenium"
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromine",
    "mass": "79.904",
    "category": "diatomic nonmetal",
    "period": 4,
    "group": 17,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
    "description": "Bromine (from Ancient Greek:\u03b2\u03c1\u1ff6\u03bc\u03bf\u03c2, br\u00f3mos, meaning \"stench\") is a chemical element with symbol Br, and atomic number 35. It is a halogen. The element was isolated independently by two chemists, Carl Jacob L\u00f6wig and Antoine Jerome Balard, in 1825\u20131826.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Bromine-ampoule.jpg",
    "source": "https://en.wikipedia.org/wiki/Bromine"
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "mass": "83.7982",
    "category": "noble gas",
    "period": 4,
    "group": 18,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    "description": "Krypton (from Greek:\u03ba\u03c1\u03c5\u03c0\u03c4\u03cc\u03c2 kryptos \"the hidden one\") is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere, is isolated by fractionally distilling liquefied air, and is often used with other rare gases in fluorescent lamps.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Krypton-glow.jpg",
    "source": "https://en.wikipedia.org/wiki/Krypton"
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "mass": "85.46783",
    "category": "alkali metal",
    "period": 5,
    "group": 1,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    "description": "Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with an atomic mass of 85.4678. Elemental rubidium is highly reactive, with properties similar to those of other alkali metals, such as very rapid oxidation in air.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Rb5.JPG",
    "source": "https://en.wikipedia.org/wiki/Rubidium"
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "mass": "87.621",
    "category": "alkaline earth metal",
    "period": 5,
    "group": 2,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
    "description": "Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white or yellowish metallic element that is highly reactive chemically. The metal turns yellow when it is exposed to air.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Strontium-1.jpg",
    "source": "https://en.wikipedia.org/wiki/Strontium"
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "mass": "88.905842",
    "category": "transition metal",
    "period": 5,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
    "description": "Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and it has often been classified as a \"rare earth element\". Yttrium is almost always found combined with the lanthanides in rare earth minerals and is never found in nature as a free element.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Piece_of_Yttrium.jpg",
    "source": "https://en.wikipedia.org/wiki/Yttrium"
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "mass": "91.2242",
    "category": "transition metal",
    "period": 5,
    "group": 4,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
    "description": "Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium. The word zircon comes from the Persian word zargun \u0632\u0631\u06af\u0648\u0646, meaning \"gold-colored\".",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Zirconium-pieces.jpg",
    "source": "https://en.wikipedia.org/wiki/Zirconium"
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "mass": "92.906372",
    "category": "transition metal",
    "period": 5,
    "group": 5,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
    "description": "Niobium, formerly columbium, is a chemical element with symbol Nb (formerly Cb) and atomic number 41. It is a soft, grey, ductile transition metal, which is often found in the pyrochlore mineral, the main commercial source for niobium, and columbite. The name comes from Greek mythology:Niobe, daughter of Tantalus since it is so similar to tantalum.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Niobium_strips.JPG",
    "source": "https://en.wikipedia.org/wiki/Niobium"
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "mass": "95.951",
    "category": "transition metal",
    "period": 5,
    "group": 6,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
    "description": "Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek \u039c\u03cc\u03bb\u03c5\u03b2\u03b4\u03bf\u03c2 molybdos, meaning lead, since its ores were confused with lead ores. Molybdenum minerals have been known throughout history, but the element was discovered (in the sense of differentiating it as a new entity from the mineral salts of other metals) in 1778 by Carl Wilhelm Scheele.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Molybdenum.jpg",
    "source": "https://en.wikipedia.org/wiki/Molybdenum"
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "mass": "98",
    "category": "transition metal",
    "period": 5,
    "group": 7,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
    "description": "Technetium (/t\u025bk\u02c8ni\u02d0\u0283i\u0259m/) is a chemical element with symbol Tc and atomic number 43. It is the element with the lowest atomic number in the periodic table that has no stable isotopes:every form of it is radioactive. Nearly all technetium is produced synthetically, and only minute amounts are found in nature.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Technetium-sample-cropped.jpg",
    "source": "https://en.wikipedia.org/wiki/Technetium"
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "mass": "101.072",
    "category": "transition metal",
    "period": 5,
    "group": 8,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
    "description": "Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Ruthenium_crystal.jpg",
    "source": "https://en.wikipedia.org/wiki/Ruthenium"
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "mass": "102.905502",
    "category": "transition metal",
    "period": 5,
    "group": 9,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
    "description": "Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, and chemically inert transition metal. It is a member of the platinum group.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/54/Rhodium_%28Rh%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Rhodium"
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "mass": "106.421",
    "category": "transition metal",
    "period": 5,
    "group": 10,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10",
    "description": "Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Palladium"
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Silver",
    "mass": "107.86822",
    "category": "transition metal",
    "period": 5,
    "group": 11,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10",
    "description": "Silver is a chemical element with symbol Ag (Greek:\u03ac\u03c1\u03b3\u03c5\u03c1\u03bf\u03c2 \u00e1rguros, Latin:argentum, both from the Indo-European root *h\u2082er\u01f5- for \"grey\" or \"shining\") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal. The metal occurs naturally in its pure, free form (native silver), as an alloy with gold and other metals, and in minerals such as argentite and chlorargyrite.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg",
    "source": "https://en.wikipedia.org/wiki/Silver"
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "mass": "112.4144",
    "category": "transition metal",
    "period": 5,
    "group": 12,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
    "description": "Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it prefers oxidation state +2 in most of its compounds and like mercury it shows a low melting point compared to transition metals.",
    "image": "https://images-of-elements.com/cadmium-4.jpg",
    "source": "https://en.wikipedia.org/wiki/Cadmium"
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indium",
    "mass": "114.8181",
    "category": "post-transition metal",
    "period": 5,
    "group": 13,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1",
    "description": "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metallic element that is rare in Earth's crust. The metal is very soft, malleable and easily fusible, with a melting point higher than sodium, but lower than lithium or tin.",
    "image": "https://images-of-elements.com/indium-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Indium"
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Tin",
    "mass": "118.7107",
    "category": "post-transition metal",
    "period": 5,
    "group": 14,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
    "description": "Tin is a chemical element with the symbol Sn (for Latin:stannum) and atomic number 50. It is a main group metal in group 14 of the periodic table. Tin shows a chemical similarity to both neighboring group-14 elements, germanium and lead, and has two possible oxidation states, +2 and the slightly more stable +4.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tin-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Tin"
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "mass": "121.7601",
    "category": "metalloid",
    "period": 5,
    "group": 15,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
    "description": "Antimony is a chemical element with symbol Sb (from Latin:stibium) and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3). Antimony compounds have been known since ancient times and were used for cosmetics; metallic antimony was also known, but it was erroneously identified as lead upon its discovery.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Antimony-4.jpg",
    "source": "https://en.wikipedia.org/wiki/Antimony"
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "mass": "127.603",
    "category": "metalloid",
    "period": 5,
    "group": 16,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4",
    "description": "Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Tellurium2.jpg",
    "source": "https://en.wikipedia.org/wiki/Tellurium"
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Iodine",
    "mass": "126.904473",
    "category": "diatomic nonmetal",
    "period": 5,
    "group": 17,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5",
    "description": "Iodine is a chemical element with symbol I and atomic number 53. The name is from Greek \u1f30\u03bf\u03b5\u03b9\u03b4\u03ae\u03c2 ioeid\u0113s, meaning violet or purple, due to the color of iodine vapor. Iodine and its compounds are primarily used in nutrition, and industrially in the production of acetic acid and certain polymers.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Iodine-sample.jpg",
    "source": "https://en.wikipedia.org/wiki/Iodine"
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "mass": "131.2936",
    "category": "noble gas",
    "period": 5,
    "group": 18,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
    "description": "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas, that occurs in the Earth's atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Xenon-glow.jpg",
    "source": "https://en.wikipedia.org/wiki/Xenon"
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Cesium",
    "mass": "132.905451966",
    "category": "alkali metal",
    "period": 6,
    "group": 1,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
    "description": "Caesium or cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28 \u00b0C (82 \u00b0F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium is an alkali metal and has physical and chemical properties similar to those of rubidium and potassium.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesium.jpg",
    "source": "https://en.wikipedia.org/wiki/Cesium"
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Barium",
    "mass": "137.3277",
    "category": "alkaline earth metal",
    "period": 6,
    "group": 2,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2",
    "description": "Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in Group 2, a soft silvery metallic alkaline earth metal. Because of its high chemical reactivity barium is never found in nature as a free element.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Barium_%2856_Ba%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Barium"
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "mass": "138.905477",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1",
    "description": "Lanthanum is a soft, ductile, silvery-white metallic chemical element with symbol La and atomic number 57. It tarnishes rapidly when exposed to air and is soft enough to be cut with a knife. It gave its name to the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table:it is also sometimes considered the first element of the 6th-period transition metals.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Lanthanum.jpg",
    "source": "https://en.wikipedia.org/wiki/Lanthanum"
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "mass": "140.1161",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f1",
    "description": "Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air. Cerium was named after the dwarf planet Ceres (itself named after the Roman goddess of agriculture).",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Cerium2.jpg",
    "source": "https://en.wikipedia.org/wiki/Cerium"
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "mass": "140.907662",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
    "description": "Praseodymium is a chemical element with symbol Pr and atomic number 59. Praseodymium is a soft, silvery, malleable and ductile metal in the lanthanide group. It is valued for its magnetic, electrical, chemical, and optical properties.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg",
    "source": "https://en.wikipedia.org/wiki/Praseodymium"
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "mass": "144.2423",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
    "description": "Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Neodymium_%2860_Nd%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Neodymium"
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "mass": "145",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5",
    "description": "Promethium, originally prometheum, is a chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms, a distinction shared with technetium. Chemically, promethium is a lanthanide, which forms salts when combined with other elements.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Promethium.jpg",
    "source": "https://en.wikipedia.org/wiki/Promethium"
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "mass": "150.362",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6",
    "description": "Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that readily oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/88/Samarium-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Samarium"
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europium",
    "mass": "151.9641",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7",
    "description": "Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe. It is a moderately hard, silvery metal which readily oxidizes in air and water.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Europium.jpg",
    "source": "https://en.wikipedia.org/wiki/Europium"
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "mass": "157.253",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1",
    "description": "Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable and ductile rare-earth metal. It is found in nature only in combined (salt) form.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Gadolinium-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Gadolinium"
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "mass": "158.925352",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9",
    "description": "Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white rare earth metal that is malleable, ductile and soft enough to be cut with a knife. Terbium is never found in nature as a free element, but it is contained in many minerals, including cerite, gadolinite, monazite, xenotime and euxenite.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Terbium-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Terbium"
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "mass": "162.5001",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10",
    "description": "Dysprosium is a chemical element with the symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster. Dysprosium is never found in nature as a free element, though it is found in various minerals, such as xenotime.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Dysprosium-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Dysprosium"
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "mass": "164.930332",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11",
    "description": "Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare earth element. Holmium was discovered by Swedish chemist Per Theodor Cleve.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Holmium2.jpg",
    "source": "https://en.wikipedia.org/wiki/Holmium"
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbium",
    "mass": "167.2593",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12",
    "description": "Erbium is a chemical element in the lanthanide series, with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements on Earth. As such, it is a rare earth element which is associated with several other rare elements in the mineral gadolinite from Ytterby in Sweden, where yttrium, ytterbium, and terbium were discovered.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Erbium-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Erbium"
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "mass": "168.934222",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13",
    "description": "Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and antepenultimate (third-last) element in the lanthanide series. Like the other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Thulium-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Thulium"
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "mass": "173.0451",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14",
    "description": "Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3, seen in its oxide, halides and other compounds.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ytterbium-3.jpg",
    "source": "https://en.wikipedia.org/wiki/Ytterbium"
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "mass": "174.96681",
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    "description": "Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry, but not in moist air. It is considered the first element of the 6th-period transition metals and the last element in the lanthanide series, and is traditionally counted among the rare earths.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lutetium.jpg",
    "source": "https://en.wikipedia.org/wiki/Lutetium"
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "mass": "178.492",
    "category": "transition metal",
    "period": 6,
    "group": 4,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
    "description": "Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923, making it the penultimate stable element to be discovered (rhenium was identified two years later).",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Hafnium_%2872_Hf%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Hafnium"
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "mass": "180.947882",
    "category": "transition metal",
    "period": 6,
    "group": 5,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
    "description": "Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, an antihero from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Tantalum.jpg",
    "source": "https://en.wikipedia.org/wiki/Tantalum"
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Tungsten",
    "mass": "183.841",
    "category": "transition metal",
    "period": 6,
    "group": 6,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
    "description": "Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone. Its name in Swedish is volfram, however, in order to distinguish it from scheelite, which in Swedish is alternatively named tungsten.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Tungsten_rod_with_oxidised_surface.jpg",
    "source": "https://en.wikipedia.org/wiki/Tungsten"
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "mass": "186.2071",
    "category": "transition metal",
    "period": 6,
    "group": 7,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5",
    "description": "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion (ppb), rhenium is one of the rarest elements in the Earth's crust.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Pure_rhenium_bead%2C_arc_melted%2C_21_grams._Original_size_in_cm_-_1.5_x_1.7.jpg",
    "source": "https://en.wikipedia.org/wiki/Rhenium"
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmium",
    "mass": "190.233",
    "category": "transition metal",
    "period": 6,
    "group": 8,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6",
    "description": "Osmium (from Greek osme (\u1f40\u03c3\u03bc\u03ae) meaning \"smell\") is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium is the densest naturally occurring element, with a density of 22.59 g/cm3.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Osmium-bead.jpg",
    "source": "https://en.wikipedia.org/wiki/Osmium"
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "mass": "192.2173",
    "category": "transition metal",
    "period": 6,
    "group": 9,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7",
    "description": "Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element (after osmium) based on measured density, although calculations involving the space lattices of the elements show that iridium is denser. It is also the most corrosion-resistant metal, even at temperatures as high as 2000 \u00b0C. Although only certain molten salts and halogens are corrosive to solid iridium, finely divided iridium dust is much more reactive and can be flammable.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iridium-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Iridium"
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "mass": "195.0849",
    "category": "transition metal",
    "period": 6,
    "group": 10,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9",
    "description": "Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, gray-white transition metal. Its name is derived from the Spanish term platina, which is literally translated into \"little silver\".",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/68/Platinum_crystals.jpg",
    "source": "https://en.wikipedia.org/wiki/Platinum"
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Gold",
    "mass": "196.9665695",
    "category": "transition metal",
    "period": 6,
    "group": 11,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10",
    "description": "Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Gold_%2879_Au%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Gold"
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "mass": "200.5923",
    "category": "transition metal",
    "period": 6,
    "group": 12,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10",
    "description": "Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum (/ha\u026a\u02c8dr\u0251\u02d0rd\u0292\u0259r\u0259m/). A heavy, silvery d-block element, mercury is the only metallic element that is liquid at standard conditions for temperature and pressure; the only other element that is liquid under these conditions is bromine, though metals such as caesium, gallium, and rubidium melt just above room temperature.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/be/Hydrargyrum_%2880_Hg%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Mercury (Element)"
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "mass": "204.38",
    "category": "post-transition metal",
    "period": 6,
    "group": 13,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
    "description": "Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Thallium_%2881_Tl%29.jpg",
    "source": "https://en.wikipedia.org/wiki/Thallium"
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Lead",
    "mass": "207.21",
    "category": "post-transition metal",
    "period": 6,
    "group": 14,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
    "description": "Lead (/l\u025bd/) is a chemical element in the carbon group with symbol Pb (from Latin:plumbum) and atomic number 82. Lead is a soft, malleable and heavy post-transition metal. Metallic lead has a bluish-white color after being freshly cut, but it soon tarnishes to a dull grayish color when exposed to air.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/63/Lead-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Lead_(element)"
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "mass": "208.980401",
    "category": "post-transition metal",
    "period": 6,
    "group": 15,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
    "description": "Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal, chemically resembles arsenic and antimony. Elemental bismuth may occur naturally, although its sulfide and oxide form important commercial ores.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Bismuth-2.jpg",
    "source": "https://en.wikipedia.org/wiki/Bismuth"
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonium",
    "mass": "209",
    "category": "post-transition metal",
    "period": 6,
    "group": 16,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
    "description": "Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive element with no stable isotopes, polonium is chemically similar to bismuth and tellurium, and it occurs in uranium ores. Applications of polonium are few.",
    "image": "https://images-of-elements.com/polonium.jpg",
    "source": "https://en.wikipedia.org/wiki/Polonium"
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Astatine",
    "mass": "210",
    "category": "metalloid",
    "period": 6,
    "group": 17,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
    "description": "Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It occurs on Earth as the decay product of various heavier elements. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.",
    "image": "https://images-of-elements.com/astatine.jpg",
    "source": "https://en.wikipedia.org/wiki/Astatine"
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radon",
    "mass": "222",
    "category": "noble gas",
    "period": 6,
    "group": 18,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
    "description": "Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas, occurring naturally as a decay product of radium. Its most stable isotope, 222Rn, has a half-life of 3.8 days.",
    "image": "https://images-of-elements.com/radon.jpg",
    "source": "https://en.wikipedia.org/wiki/Radon"
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francium",
    "mass": "223",
    "category": "alkali metal",
    "period": 7,
    "group": 1,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
    "description": "Francium is a chemical element with symbol Fr and atomic number 87. It used to be known as eka-caesium and actinium K. It is the second-least electronegative element, behind only caesium. Francium is a highly radioactive metal that decays into astatine, radium, and radon.",
    "image": "https://images-of-elements.com/francium.jpg",
    "source": "https://en.wikipedia.org/wiki/Francium"
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radium",
    "mass": "226",
    "category": "alkaline earth metal",
    "period": 7,
    "group": 2,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
    "description": "Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is almost colorless, but it readily combines with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2).",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Radium226.jpg",
    "source": "https://en.wikipedia.org/wiki/Radium"
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "mass": "227",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    "description": "Actinium is a radioactive chemical element with symbol Ac (not to be confused with the abbreviation for an acetyl group) and atomic number 89, which was discovered in 1899. It was the first non-primordial radioactive element to be isolated. Polonium, radium and radon were observed before actinium, but they were not isolated until 1902.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/Actinium_sample_%2831481701837%29.png",
    "source": "https://en.wikipedia.org/wiki/Actinium"
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Thorium",
    "mass": "232.03774",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    "description": "Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only two significantly radioactive elements that still occur naturally in large quantities as a primordial element (the other being uranium). It was discovered in 1828 by the Norwegian Reverend and amateur mineralogist Morten Thrane Esmark and identified by the Swedish chemist J\u00f6ns Jakob Berzelius, who named it after Thor, the Norse god of thunder.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Thorium-1.jpg",
    "source": "https://en.wikipedia.org/wiki/Thorium"
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "mass": "231.035882",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
    "description": "Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds where protactinium is usually present in the oxidation state +5, but can also assume +4 and even +2 or +3 states.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Protactinium-233.jpg",
    "source": "https://en.wikipedia.org/wiki/Protactinium"
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranium",
    "mass": "238.028913",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
    "description": "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ames_Process_uranium_biscuit.jpg",
    "source": "https://en.wikipedia.org/wiki/Uranium"
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "mass": "237",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
    "description": "Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet beyond Uranus.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg",
    "source": "https://en.wikipedia.org/wiki/Neptunium"
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "mass": "244",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
    "description": "Plutonium is a transuranic radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Plutonium_ring.jpg",
    "source": "https://en.wikipedia.org/wiki/Plutonium"
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americium",
    "mass": "243",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    "description": "Americium is a radioactive transuranic chemical element with symbol Am and atomic number 95. This member of the actinide series is located in the periodic table under the lanthanide element europium, and thus by analogy was named after the Americas. Americium was first produced in 1944 by the group of Glenn T.Seaborg from Berkeley, California, at the metallurgical laboratory of University of Chicago.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Americium_microscope.jpg",
    "source": "https://en.wikipedia.org/wiki/Americium"
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curium",
    "mass": "247",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
    "description": "Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie \u2013 both were known for their research on radioactivity. Curium was first intentionally produced and identified in July 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley.",
    "image": "https://images-of-elements.com/s/curium-glow.jpg",
    "source": "https://en.wikipedia.org/wiki/Curium"
  },
  {
    "number": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "mass": "247",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
    "description": "Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered in December 1949.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Berkelium.jpg",
    "source": "https://en.wikipedia.org/wiki/Berkelium"
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californium",
    "mass": "251",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
    "description": "Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles (helium-4 ions). It is an actinide element, the sixth transuranium element to be synthesized, and has the second-highest atomic mass of all the elements that have been produced in amounts large enough to see with the unaided eye (after einsteinium).",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/93/Californium.jpg",
    "source": "https://en.wikipedia.org/wiki/Californium"
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "mass": "252",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
    "description": "Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide. Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952, and named after Albert Einstein.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg",
    "source": "https://en.wikipedia.org/wiki/Einsteinium"
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "mass": "257",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
    "description": "Fermium is a synthetic element with symbol Fm and atomic number 100. It is a member of the actinide series. It is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/Ivy_Mike_-_mushroom_cloud.jpg",
    "source": "https://en.wikipedia.org/wiki/Fermium"
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "mass": "258",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    "description": "Mendelevium is a synthetic element with chemical symbol Md (formerly Mv) and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements. It is the antepenultimate actinide and the ninth transuranic element.",
    "image": "https://images-of-elements.com/s/mendelevium.jpg",
    "source": "https://en.wikipedia.org/wiki/Mendelevium"
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelium",
    "mass": "259",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    "description": "Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.",
    "image": "https://images-of-elements.com/nobelium.jpg",
    "source": "https://en.wikipedia.org/wiki/Nobelium"
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "mass": "266",
    "category": "actinide",
    "period": 7,
    "group": 3,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
    "description": "Lawrencium is a synthetic chemical element with chemical symbol Lr (formerly Lw) and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements. A radioactive metal, lawrencium is the eleventh transuranic element and is also the final member of the actinide series.",
    "image": "https://images-of-elements.com/lawrencium.jpg",
    "source": "https://en.wikipedia.org/wiki/Lawrencium"
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "mass": "267",
    "category": "transition metal",
    "period": 7,
    "group": 4,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
    "description": "Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 267Rf, has a half-life of approximately 1.3 hours. In the periodic table of the elements, it is a d - block element and the second of the fourth - row transition elements.",
    "image": "https://images-of-elements.com/s/rutherfordium.jpg",
    "source": "https://en.wikipedia.org/wiki/Rutherfordium"
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "mass": "268",
    "category": "transition metal",
    "period": 7,
    "group": 5,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
    "description": "Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia (north of Moscow), where it was first produced. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, dubnium-268, has a half-life of approximately 28 hours.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Dubnium"
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "mass": "269",
    "category": "transition metal",
    "period": 7,
    "group": 6,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
    "description": "Seaborgium is a synthetic element with symbol Sg and atomic number 106. Its most stable isotope 271Sg has a half-life of 1.9 minutes. A more recently discovered isotope 269Sg has a potentially slightly longer half-life (ca.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Seaborgium"
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "mass": "270",
    "category": "transition metal",
    "period": 7,
    "group": 7,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
    "description": "Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 270Bh, has a half-life of approximately 61 seconds.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Bohrium"
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "mass": "269",
    "category": "transition metal",
    "period": 7,
    "group": 8,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
    "description": "Hassium is a chemical element with symbol Hs and atomic number 108, named after the German state of Hesse. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 269Hs, has a half-life of approximately 9.7 seconds, although an unconfirmed metastable state, 277mHs, may have a longer half-life of about 130 seconds. More than 100 atoms of hassium have been synthesized to date.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Hassium"
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "mass": "278",
    "category": "unknown, probably transition metal",
    "period": 7,
    "group": 9,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
    "description": "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is an extremely radioactive synthetic element (an element not found in nature that can be created in a laboratory). The most stable known isotope, meitnerium-278, has a half-life of 7.6 seconds.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Meitnerium"
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "mass": "281",
    "category": "unknown, probably transition metal",
    "period": 7,
    "group": 10,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8",
    "description": "Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 10 seconds.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Darmstadtium"
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "mass": "282",
    "category": "unknown, probably transition metal",
    "period": 7,
    "group": 11,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9",
    "description": "Roentgenium is a chemical element with symbol Rg and atomic number 111. It is an extremely radioactive synthetic element (an element that can be created in a laboratory but is not found in nature); the most stable known isotope, roentgenium-282, has a half-life of 2.1 minutes. Roentgenium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Roentgenium"
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "mass": "285",
    "category": "transition metal",
    "period": 7,
    "group": 12,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
    "description": "Copernicium is a chemical element with symbol Cn and atomic number 112. It is an extremely radioactive synthetic element that can only be created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds, but it is possible that this copernicium isotope may have a nuclear isomer with a longer half-life, 8.9 min.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Copernicium"
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "mass": "286",
    "category": "unknown, probably transition metal",
    "period": 7,
    "group": 13,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    "description": "Nihonium is a chemical element with atomic number 113. It has a symbol Nh. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 20 seconds.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Ununtrium"
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "mass": "289",
    "category": "post-transition metal",
    "period": 7,
    "group": 14,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
    "description": "Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia, where the element was discovered in 1998.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Flerovium"
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "mass": "289",
    "category": "unknown, probably post-transition metal",
    "period": 7,
    "group": 15,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
    "description": "Moscovium is the name of a synthetic superheavy element in the periodic table that has the symbol Mc and has the atomic number 115. It is an extremely radioactive element; its most stable known isotope, moscovium-289, has a half-life of only 220 milliseconds. It is also known as eka-bismuth or simply element 115.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Ununpentium"
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "mass": "293",
    "category": "unknown, probably post-transition metal",
    "period": 7,
    "group": 16,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
    "description": "Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research in Dubna, Russia to discover livermorium in 2000.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Livermorium"
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "mass": "294",
    "category": "unknown, probably metalloid",
    "period": 7,
    "group": 17,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
    "description": "Tennessine is a superheavy artificial chemical element with an atomic number of 117 and a symbol of Ts. Also known as eka-astatine or element 117, it is the second-heaviest known element and penultimate element of the 7th period of the periodic table. As of 2016, fifteen tennessine atoms have been observed: six when it was first synthesized in 2010, seven in 2012, and two in 2014.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Tennessine"
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "mass": "294",
    "category": "unknown, predicted to be noble gas",
    "period": 7,
    "group": 18,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
    "description": "Oganesson is IUPAC's name for the transactinide element with the atomic number 118 and element symbol Og. It is also known as eka-radon or element 118, and on the periodic table of the elements it is a p-block element and the last one of the 7th period. Oganesson is currently the only synthetic member of group 18.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Oganesson"
  },
  {
    "number": 119,
    "symbol": "Uue",
    "name": "Ununennium",
    "mass": "315",
    "category": "unknown, but predicted to be an alkali metal",
    "period": 8,
    "group": 1,
    "electron": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6 8s1",
    "description": "Ununennium, also known as eka-francium or simply element 119, is the hypothetical chemical element with symbol Uue and atomic number 119. Ununennium and Uue are the temporary systematic IUPAC name and symbol respectively, until a permanent name is decided upon. In the periodic table of the elements, it is expected to be an s-block element, an alkali metal, and the first element in the eighth period.",
    "image": "https://images-of-elements.com/s/transactinoid.png",
    "source": "https://en.wikipedia.org/wiki/Ununennium"
  }
];






                console.log(elements)
            // Function to get color based on category
           function getCategoryColor(category) {
    if (category.includes("alkali metal")) return "bg-alkali";
    if (category.includes("alkaline earth metal")) return "bg-alkaline";
    if (category.includes("transition metal")) return "bg-transition";
    if (category.includes("post-transition metal")) return "bg-post";
    if (category.includes("metalloid")) return "bg-metalloid";
    if (category.includes("nonmetal")) return "bg-nonmetal";
    if (category.includes("halogen")) return "bg-halogen";
    if (category.includes("noble gas")) return "bg-noble";
    if (category.includes("lanthanide")) return "bg-lanthanide";
    if (category.includes("actinide")) return "bg-actinide";
    return "bg-gray-300";
}


            // Function to get proper category name
            function getCategoryName(category) {
    if (category.includes("alkali metal")) return "Alkali Metal";
    if (category.includes("alkaline earth metal")) return "Alkaline Earth Metal";
    if (category.includes("transition metal")) return "Transition Metal";
    if (category.includes("post-transition metal")) return "Post-Transition Metal";
    if (category.includes("metalloid")) return "Metalloid";
    if (category.includes("nonmetal")) return "Nonmetal";
    if (category.includes("halogen")) return "Halogen";
    if (category.includes("noble gas")) return "Noble Gas";
    if (category.includes("lanthanide")) return "Lanthanide";
    if (category.includes("actinide")) return "Actinide";
    return "Unknown";
}


            // Function to create element card
            function createElementCard(element) {
                const card = document.createElement('div');
                card.className = `element ${getCategoryColor(element.category)} text-center p-1 rounded-lg cursor-pointer relative text-black`;
                card.dataset.number = element.number;

                const symbol = document.createElement('div');
                symbol.className = 'element-symbol font-bold text-lg';
                symbol.textContent = element.symbol;

                const number = document.createElement('div');
                number.className = 'element-number text-xs absolute top-1 left-1';
                number.textContent = element.number;

                const name = document.createElement('div');
                name.className = 'element-name text-xs truncate';
                name.textContent = element.name;

                card.appendChild(number);
                card.appendChild(symbol);
                card.appendChild(name);

                card.addEventListener('click', () => showElementDetails(element));

                return card;
            }

            // Function to populate the periodic table
            function populatePeriodicTable() {
                const table = document.getElementById('periodic-table');
                const lanthanideRow = document.getElementById('lanthanide-row');
                const actinideRow = document.getElementById('actinide-row');

                // Clear existing content
                table.innerHTML = '';
                lanthanideRow.innerHTML = '';
                actinideRow.innerHTML = '';

                // Positions for the main table
                const positions = {
                    1: [1, 1], 2: [1, 18],
                    3: [2, 1], 4: [2, 2], 5: [2, 13], 6: [2, 14], 7: [2, 15], 8: [2, 16], 9: [2, 17], 10: [2, 18],
                    11: [3, 1], 12: [3, 2], 13: [3, 13], 14: [3, 14], 15: [3, 15], 16: [3, 16], 17: [3, 17], 18: [3, 18],
                    19: [4, 1], 20: [4, 2], 21: [4, 3], 22: [4, 4], 23: [4, 5], 24: [4, 6], 25: [4, 7], 26: [4, 8], 27: [4, 9], 28: [4, 10], 29: [4, 11], 30: [4, 12], 31: [4, 13], 32: [4, 14], 33: [4, 15], 34: [4, 16], 35: [4, 17], 36: [4, 18],
                    37: [5, 1], 38: [5, 2], 39: [5, 3], 40: [5, 4], 41: [5, 5], 42: [5, 6], 43: [5, 7], 44: [5, 8], 45: [5, 9], 46: [5, 10], 47: [5, 11], 48: [5, 12], 49: [5, 13], 50: [5, 14], 51: [5, 15], 52: [5, 16], 53: [5, 17], 54: [5, 18],
                    55: [6, 1], 56: [6, 2], 57: [6, 3], 72: [6, 4], 73: [6, 5], 74: [6, 6], 75: [6, 7], 76: [6, 8], 77: [6, 9], 78: [6, 10], 79: [6, 11], 80: [6, 12], 81: [6, 13], 82: [6, 14], 83: [6, 15], 84: [6, 16], 85: [6, 17], 86: [6, 18],
                    87: [7, 1], 88: [7, 2], 89: [7, 3], 104: [7, 4], 105: [7, 5], 106: [7, 6], 107: [7, 7], 108: [7, 8], 109: [7, 9], 110: [7, 10], 111: [7, 11], 112: [7, 12], 113: [7, 13], 114: [7, 14], 115: [7, 15], 116: [7, 16], 117: [7, 17], 118: [7, 18]
                };

                // Create placeholder cells for the main table
                for (let row = 1; row <= 7; row++) {
                    for (let col = 1; col <= 18; col++) {
                        const cell = document.createElement('div');
                        cell.style.gridRow = row;
                        cell.style.gridColumn = col;

                        // Find element at this position (if any)
                        const elementNumber = Object.keys(positions).find(key =>
                            positions[key][0] === row && positions[key][1] === col
                        );

                        if (elementNumber) {
                            const element = elements.find(e => e.number === parseInt(elementNumber));
                            if (element) {
                                const card = createElementCard(element);
                                cell.appendChild(card);
                            }
                        }

                        table.appendChild(cell);
                    }
                }

                // Add placeholders for lanthanides and actinides in the main table
                const lanthanidePlaceholder = document.createElement('div');
                lanthanidePlaceholder.style.gridRow = 8;
                lanthanidePlaceholder.style.gridColumn = 3;
                lanthanidePlaceholder.className = 'col-span-1 text-center text-xs';
                lanthanidePlaceholder.textContent = '57-71';

                const actinidePlaceholder = document.createElement('div');
                actinidePlaceholder.style.gridRow = 9;
                actinidePlaceholder.style.gridColumn = 3;
                actinidePlaceholder.className = 'col-span-1 text-center text-xs';
                actinidePlaceholder.textContent = '89-103';

                table.appendChild(lanthanidePlaceholder);
                table.appendChild(actinidePlaceholder);

                // Add lanthanides to separate row
                const lanthanides = elements.filter(e => e.category === 'lanthanide');
                lanthanides.forEach((element, index) => {
                    const card = createElementCard(element);
                    card.style.gridColumn = index + 1;
                    lanthanideRow.appendChild(card);
                });

                // Add actinides to separate row
                const actinides = elements.filter(e => e.category === 'actinide');
                actinides.forEach((element, index) => {
                    const card = createElementCard(element);
                    card.style.gridColumn = index + 1;
                    actinideRow.appendChild(card);
                });
            }

            // Function to show element details in the modal
            function showElementDetails(element) {
                const modal = document.getElementById('element-modal');
                const modalSymbol = document.getElementById('modal-symbol');
                const modalSymbolContainer = document.getElementById('modal-symbol-container');
                const modalName = document.getElementById('modal-name');
                const modalCategory = document.getElementById('modal-category');
                const modalNumber = document.getElementById('modal-number');
                const modalMass = document.getElementById('modal-mass');
                const modalPeriod = document.getElementById('modal-period');
                const modalGroup = document.getElementById('modal-group');
                const modalElectron = document.getElementById('modal-electron');
                const modalDescription = document.getElementById('modal-description');
                const modelItems = document.getElementById('model-items');
                const modelImage = document.getElementById('model-image');
                const imageBox = document.getElementById('image-box');

                const modelItemsBtn = document.getElementById('model-image-btn');
                const modelBackBtn = document.getElementById('model-back-btn');

                // Populate modal content
                modalSymbol.textContent = element.symbol;
                modalSymbolContainer.className = `w-16 h-16 rounded-lg flex items-center justify-center mr-4 ${getCategoryColor(element.category)}`;
                modalName.textContent = element.name;
                modalCategory.textContent = getCategoryName(element.category);
                modalNumber.textContent = element.number;
                modalMass.textContent = element.mass;
                modalPeriod.textContent = element.period;
                modalGroup.textContent = element.group > 100 ? '—' : element.group; // Display — for lanthanides/actinides
                modalElectron.textContent = element.electron;
                modalDescription.textContent = element.description;

                const img = document.createElement("img");
                img.src = element.image;
                img.alt = element.name;
                imageBox.appendChild(img);

                
                const link = document.createElement("a");
                link.href = element.source;
                link.target = "_blank"; //
                link.className = "inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition my-5 mx-5 absolute bottom-4 right-4";
                const icon = document.createElement("span");
icon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M21.71 20.29l-3.388-3.388A8.931 8.931 0 0019 11a9 9 0 10-9 9 8.931 8.931 0 005.902-1.678l3.388 3.388a1 1 0 001.414-1.414zM11 18a7 7 0 117-7 7.008 7.008 0 01-7 7z"/>
  </svg>
`;
link.appendChild(icon);

                const text = document.createTextNode(` Learn more about ${element.name}`);
                link.appendChild(text);
                imageBox.appendChild(link);

                // Show modal
                modal.classList.remove('hidden');
            }


            //
            document.getElementById('model-back-btn').addEventListener('click', () => {
                document.getElementById('model-image').classList.add('hidden');
                 document.getElementById('model-items').classList.remove('hidden');
            });

            //
            document.getElementById('model-image-btn').addEventListener('click', () => {
                document.getElementById('model-image').classList.remove('hidden');
                 document.getElementById('model-items').classList.add('hidden');
            });

            // Close modal when close button is clicked
            document.getElementById('close-modal').addEventListener('click', () => {
                document.getElementById('model-image').classList.add('hidden');
                 document.getElementById('model-items').classList.remove('hidden');
                document.getElementById('element-modal').classList.add('hidden');
                document.getElementById('image-box').innerHTML = '';
                //document.querySelectorAll('img').forEach(img => img.remove());

            });

            // Close modal when clicking outside
            document.getElementById('element-modal').addEventListener('click', (event) => {
                if (event.target === document.getElementById('element-modal')) {
                    document.getElementById('element-modal').classList.add('hidden');
                      document.getElementById('model-image').classList.add('hidden');
                 document.getElementById('model-items').classList.remove('hidden');
                    document.getElementById('image-box').innerHTML = '';
               
                }
            });

            // Search functionality
            const searchInput = document.getElementById('search');
            const searchResults = document.getElementById('search-results');

            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();

                if (!searchTerm) {
                    searchResults.innerHTML = '';
                    searchResults.classList.add('hidden');
                    return;
                }

                // Filter elements based on search term
                const filteredElements = elements.filter(element =>
                    element.name.toLowerCase().includes(searchTerm) ||
                    element.symbol.toLowerCase().includes(searchTerm) ||
                    element.number.toString().includes(searchTerm)
                );

                // Display search results
                searchResults.innerHTML = '';

                if (filteredElements.length > 0) {
                    filteredElements.slice(0, 10).forEach(element => {
                        const result = document.createElement('div');
                        result.className = `p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center`;

                        const symbolBadge = document.createElement('div');
                        symbolBadge.className = `${getCategoryColor(element.category)} text-black w-8 h-8 rounded flex items-center justify-center mr-2`;
                        symbolBadge.textContent = element.symbol;

                        const details = document.createElement('div');
                        details.innerHTML = `<div class="font-medium">${element.name}</div><div class="text-xs text-gray-500 dark:text-gray-400">Atomic Number: ${element.number}</div>`;

                        result.appendChild(symbolBadge);
                        result.appendChild(details);

                        result.addEventListener('click', () => {
                            showElementDetails(element);
                            searchResults.classList.add('hidden');
                            searchInput.value = '';
                        });

                        searchResults.appendChild(result);
                    });

                    searchResults.classList.remove('hidden');
                } else {
                    const noResults = document.createElement('div');
                    noResults.className = 'p-2 text-gray-500 dark:text-gray-400';
                    noResults.textContent = 'No elements found';
                    searchResults.appendChild(noResults);
                    searchResults.classList.remove('hidden');
                }
            });

            // Hide search results when clicking outside
            document.addEventListener('click', (event) => {
                if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
                    searchResults.classList.add('hidden');
                }
            });

            // Initialize the periodic table
            populatePeriodicTable();
        