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

            // Element data
            const elements = [
                { number: 1, symbol: "H", name: "Hydrogen", mass: "1.008", category: "nonmetal", period: 1, group: 1, electron: "1s¹", description: "Hydrogen is the lightest element and most abundant chemical substance in the universe, constituting roughly 75% of all normal matter." },
                { number: 2, symbol: "He", name: "Helium", mass: "4.0026", category: "noble", period: 1, group: 18, electron: "1s²", description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table." },
                { number: 3, symbol: "Li", name: "Lithium", mass: "6.94", category: "alkali", period: 2, group: 1, electron: "1s² 2s¹", description: "Lithium is a soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the lightest solid element." },
                { number: 4, symbol: "Be", name: "Beryllium", mass: "9.0122", category: "alkaline", period: 2, group: 2, electron: "1s² 2s²", description: "Beryllium is a relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei struck by cosmic rays." },
                { number: 5, symbol: "B", name: "Boron", mass: "10.81", category: "metalloid", period: 2, group: 13, electron: "1s² 2s² 2p¹", description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis." },
                { number: 6, symbol: "C", name: "Carbon", mass: "12.011", category: "nonmetal", period: 2, group: 14, electron: "1s² 2s² 2p²", description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds." },
                { number: 7, symbol: "N", name: "Nitrogen", mass: "14.007", category: "nonmetal", period: 2, group: 15, electron: "1s² 2s² 2p³", description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first discovered and isolated by Scottish physician Daniel Rutherford in 1772." },
                { number: 8, symbol: "O", name: "Oxygen", mass: "15.999", category: "nonmetal", period: 2, group: 16, electron: "1s² 2s² 2p⁴", description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table, a highly reactive nonmetal." },
                { number: 9, symbol: "F", name: "Fluorine", mass: "18.998", category: "halogen", period: 2, group: 17, electron: "1s² 2s² 2p⁵", description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions." },
                { number: 10, symbol: "Ne", name: "Neon", mass: "20.180", category: "noble", period: 2, group: 18, electron: "1s² 2s² 2p⁶", description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas. Neon is a colorless, odorless, inert monatomic gas under standard conditions." },

                { number: 11, symbol: "Na", name: "Sodium", mass: "22.990", category: "alkali", period: 3, group: 1, electron: "1s² 2s² 2p⁶ 3s¹", description: "Sodium is a chemical element with symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal." },
                { number: 12, symbol: "Mg", name: "Magnesium", mass: "24.305", category: "alkaline", period: 3, group: 2, electron: "1s² 2s² 2p⁶ 3s²", description: "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column of the periodic table." },
                { number: 13, symbol: "Al", name: "Aluminum", mass: "26.982", category: "post", period: 3, group: 13, electron: "1s² 2s² 2p⁶ 3s² 3p¹", description: "Aluminum is a chemical element with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic and ductile metal." },
                { number: 14, symbol: "Si", name: "Silicon", mass: "28.085", category: "metalloid", period: 3, group: 14, electron: "1s² 2s² 2p⁶ 3s² 3p²", description: "Silicon is a chemical element with symbol Si and atomic number 14. It is a hard and brittle crystalline solid with a blue-grey metallic lustre." },
                { number: 15, symbol: "P", name: "Phosphorus", mass: "30.974", category: "nonmetal", period: 3, group: 15, electron: "1s² 2s² 2p⁶ 3s² 3p³", description: "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms—white phosphorus and red phosphorus." },
                { number: 16, symbol: "S", name: "Sulfur", mass: "32.06", category: "nonmetal", period: 3, group: 16, electron: "1s² 2s² 2p⁶ 3s² 3p⁴", description: "Sulfur is a chemical element with symbol S and atomic number 16. It is abundant, multivalent, and nonmetallic." },
                { number: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", category: "halogen", period: 3, group: 17, electron: "1s² 2s² 2p⁶ 3s² 3p⁵", description: "Chlorine is a chemical element with symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table." },
                { number: 18, symbol: "Ar", name: "Argon", mass: "39.948", category: "noble", period: 3, group: 18, electron: "1s² 2s² 2p⁶ 3s² 3p⁶", description: "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas." },

                { number: 19, symbol: "K", name: "Potassium", mass: "39.098", category: "alkali", period: 4, group: 1, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹", description: "Potassium is a chemical element with symbol K and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name derives." },
                { number: 20, symbol: "Ca", name: "Calcium", mass: "40.078", category: "alkaline", period: 4, group: 2, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", description: "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust." },

                { number: 21, symbol: "Sc", name: "Scandium", mass: "44.956", category: "transition", period: 4, group: 3, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹", description: "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been classified as a rare-earth element." },
                { number: 22, symbol: "Ti", name: "Titanium", mass: "47.867", category: "transition", period: 4, group: 4, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d²", description: "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density, and high strength." },
                { number: 23, symbol: "V", name: "Vanadium", mass: "50.942", category: "transition", period: 4, group: 5, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³", description: "Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile, and malleable transition metal." },
                { number: 24, symbol: "Cr", name: "Chromium", mass: "51.996", category: "transition", period: 4, group: 6, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵", description: "Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in group 6, a steely-grey, lustrous, hard and brittle transition metal." },
                { number: 25, symbol: "Mn", name: "Manganese", mass: "54.938", category: "transition", period: 4, group: 7, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵", description: "Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in minerals in combination with iron." },
                { number: 26, symbol: "Fe", name: "Iron", mass: "55.845", category: "transition", period: 4, group: 8, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶", description: "Iron is a chemical element with symbol Fe and atomic number 26. It is a metal in the first transition series and is by mass the most common element on Earth." },
                { number: 27, symbol: "Co", name: "Cobalt", mass: "58.933", category: "transition", period: 4, group: 9, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁷", description: "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt is found in the Earth's crust only in chemically combined form, save for small deposits found in alloys of natural meteoric iron." },
                { number: 28, symbol: "Ni", name: "Nickel", mass: "58.693", category: "transition", period: 4, group: 10, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸", description: "Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge, a hard and ductile transition metal." },
                { number: 29, symbol: "Cu", name: "Copper", mass: "63.546", category: "transition", period: 4, group: 11, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰", description: "Copper is a chemical element with symbol Cu and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity." },
                { number: 30, symbol: "Zn", name: "Zinc", mass: "65.38", category: "transition", period: 4, group: 12, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰", description: "Zinc is a chemical element with symbol Zn and atomic number 30. It is the first element in group 12 of the periodic table. In some respects zinc is chemically similar to magnesium." },

                { number: 31, symbol: "Ga", name: "Gallium", mass: "69.723", category: "post", period: 4, group: 13, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p¹", description: "Gallium is a chemical element with symbol Ga and atomic number 31. It is in group 13 of the periodic table, and thus has similarities to the other metals of the group, aluminium, indium, and thallium." },
                { number: 32, symbol: "Ge", name: "Germanium", mass: "72.630", category: "metalloid", period: 4, group: 14, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p²", description: "Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors silicon and tin." },
                { number: 33, symbol: "As", name: "Arsenic", mass: "74.922", category: "metalloid", period: 4, group: 15, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³", description: "Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in combination with sulfur and metals, but also as a pure elemental crystal." },
                { number: 34, symbol: "Se", name: "Selenium", mass: "78.971", category: "nonmetal", period: 4, group: 16, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴", description: "Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between the elements above and below in the periodic table, sulfur and tellurium." },
                { number: 35, symbol: "Br", name: "Bromine", mass: "79.904", category: "halogen", period: 4, group: 17, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵", description: "Bromine is a chemical element with symbol Br and atomic number 35. It is the third-lightest halogen, and is a fuming red-brown liquid at room temperature." },
                { number: 36, symbol: "Kr", name: "Krypton", mass: "83.798", category: "noble", period: 4, group: 18, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶", description: "Krypton is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements." },

                { number: 37, symbol: "Rb", name: "Rubidium", mass: "85.468", category: "alkali", period: 5, group: 1, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹", description: "Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with a standard atomic weight of 85.4678." },
                { number: 38, symbol: "Sr", name: "Strontium", mass: "87.62", category: "alkaline", period: 5, group: 2, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s²", description: "Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white yellowish metallic element that is highly chemically reactive." },

                { number: 39, symbol: "Y", name: "Yttrium", mass: "88.906", category: "transition", period: 5, group: 3, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹", description: "Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and has often been classified as a 'rare-earth element'." },
                { number: 40, symbol: "Zr", name: "Zirconium", mass: "91.224", category: "transition", period: 5, group: 4, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d²", description: "Zirconium is a chemical element with symbol Zr and atomic number 40. The name zirconium is taken from the name of the mineral zircon, the most important source of zirconium." },
                { number: 41, symbol: "Nb", name: "Niobium", mass: "92.906", category: "transition", period: 5, group: 5, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁴", description: "Niobium, formerly known as columbium, is a chemical element with symbol Nb and atomic number 41. It is a soft, grey, crystalline, ductile transition metal." },
                { number: 42, symbol: "Mo", name: "Molybdenum", mass: "95.95", category: "transition", period: 5, group: 6, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁵", description: "Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek Μόλυβδος molybdos, meaning lead." },
                { number: 43, symbol: "Tc", name: "Technetium", mass: "[98]", category: "transition", period: 5, group: 7, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁵", description: "Technetium is a chemical element with symbol Tc and atomic number 43. It is the lightest element whose isotopes are all radioactive; none are stable, excluding the fully ionized state of ⁹⁷Tc." },
                { number: 44, symbol: "Ru", name: "Ruthenium", mass: "101.07", category: "transition", period: 5, group: 8, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁷", description: "Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table." },
                { number: 45, symbol: "Rh", name: "Rhodium", mass: "102.91", category: "transition", period: 5, group: 9, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁸", description: "Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, corrosion-resistant, and chemically inert transition metal." },
                { number: 46, symbol: "Pd", name: "Palladium", mass: "106.42", category: "transition", period: 5, group: 10, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 4d¹⁰", description: "Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston." },
                { number: 47, symbol: "Ag", name: "Silver", mass: "107.87", category: "transition", period: 5, group: 11, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d¹⁰", description: "Silver is a chemical element with symbol Ag and atomic number 47. A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal." },
                { number: 48, symbol: "Cd", name: "Cadmium", mass: "112.41", category: "transition", period: 5, group: 12, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰", description: "Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury." },

                { number: 49, symbol: "In", name: "Indium", mass: "114.82", category: "post", period: 5, group: 13, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p¹", description: "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metal that makes up 0.21 parts per million of the Earth's crust." },
                { number: 50, symbol: "Sn", name: "Tin", mass: "118.71", category: "post", period: 5, group: 14, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p²", description: "Tin is a chemical element with symbol Sn and atomic number 50. It is a post-transition metal in group 14 of the periodic table. It is obtained chiefly from the mineral cassiterite, which contains tin dioxide." },
                { number: 51, symbol: "Sb", name: "Antimony", mass: "121.76", category: "metalloid", period: 5, group: 15, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p³", description: "Antimony is a chemical element with symbol Sb and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite." },
                { number: 52, symbol: "Te", name: "Tellurium", mass: "127.60", category: "metalloid", period: 5, group: 16, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁴", description: "Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid." },
                { number: 53, symbol: "I", name: "Iodine", mass: "126.90", category: "halogen", period: 5, group: 17, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁵", description: "Iodine is a chemical element with symbol I and atomic number 53. The heaviest of the stable halogens, it exists as a lustrous, purple-black non-metallic solid at standard conditions that melts to form a deep violet liquid at 114 degrees Celsius." },
                { number: 54, symbol: "Xe", name: "Xenon", mass: "131.29", category: "noble", period: 5, group: 18, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶", description: "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas found in the Earth's atmosphere in trace amounts." },

                { number: 55, symbol: "Cs", name: "Cesium", mass: "132.91", category: "alkali", period: 6, group: 1, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹", description: "Cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-golden alkali metal with a melting point of 28.5 °C, which makes it one of only five elemental metals that are liquid at or near room temperature." },
                { number: 56, symbol: "Ba", name: "Barium", mass: "137.33", category: "alkaline", period: 6, group: 2, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s²", description: "Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in group 2 and is a soft, silvery alkaline earth metal." },

                { number: 57, symbol: "La", name: "Lanthanum", mass: "138.91", category: "lanthanide", period: 6, group: 3, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹", description: "Lanthanum is a chemical element with symbol La and atomic number 57. It is a soft, ductile, silvery-white metal that tarnishes rapidly when exposed to air and is soft enough to be cut with a knife." },
                { number: 72, symbol: "Hf", name: "Hafnium", mass: "178.49", category: "transition", period: 6, group: 4, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d²", description: "Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in many zirconium minerals." },
                { number: 73, symbol: "Ta", name: "Tantalum", mass: "180.95", category: "transition", period: 6, group: 5, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d³", description: "Tantalum is a chemical element with symbol Ta and atomic number 73. A rare, hard, blue-gray, lustrous transition metal, tantalum is highly corrosion-resistant." },
                { number: 74, symbol: "W", name: "Tungsten", mass: "183.84", category: "transition", period: 6, group: 6, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁴", description: "Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The name tungsten comes from the former Swedish name for the tungstate mineral scheelite, tungsten which means 'heavy stone'." },
                { number: 75, symbol: "Re", name: "Rhenium", mass: "186.21", category: "transition", period: 6, group: 7, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁵", description: "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table." },
                { number: 76, symbol: "Os", name: "Osmium", mass: "190.23", category: "transition", period: 6, group: 8, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁶", description: "Osmium is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores." },
                { number: 77, symbol: "Ir", name: "Iridium", mass: "192.22", category: "transition", period: 6, group: 9, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁷", description: "Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element after osmium." },
                { number: 78, symbol: "Pt", name: "Platinum", mass: "195.08", category: "transition", period: 6, group: 10, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹ 4f¹⁴ 5d⁹", description: "Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, silverish-white transition metal." },
                { number: 79, symbol: "Au", name: "Gold", mass: "196.97", category: "transition", period: 6, group: 11, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹ 4f¹⁴ 5d¹⁰", description: "Gold is a chemical element with symbol Au and atomic number 79, making it one of the higher atomic number elements that occur naturally. In a pure form, it is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal." },
                { number: 80, symbol: "Hg", name: "Mercury", mass: "200.59", category: "transition", period: 6, group: 12, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰", description: "Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum." },

                { number: 81, symbol: "Tl", name: "Thallium", mass: "204.38", category: "post", period: 6, group: 13, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p¹", description: "Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature." },
                { number: 82, symbol: "Pb", name: "Lead", mass: "207.2", category: "post", period: 6, group: 14, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p²", description: "Lead is a chemical element with symbol Pb and atomic number 82. It is a heavy metal that is denser than most common materials. Lead is soft and malleable, and has a relatively low melting point." },
                { number: 83, symbol: "Bi", name: "Bismuth", mass: "208.98", category: "post", period: 6, group: 15, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p³", description: "Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal and one of the pnictogens, chemically resembles arsenic and antimony." },
                { number: 84, symbol: "Po", name: "Polonium", mass: "[209]", category: "post", period: 6, group: 16, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁴", description: "Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive metal with no stable isotopes, polonium is chemically similar to selenium and tellurium." },
                { number: 85, symbol: "At", name: "Astatine", mass: "[210]", category: "halogen", period: 6, group: 17, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁵", description: "Astatine is a radioactive chemical element with symbol At and atomic number 85. It is the rarest naturally occurring element in the Earth's crust, occurring only as the decay product of various heavier elements." },
                { number: 86, symbol: "Rn", name: "Radon", mass: "[222]", category: "noble", period: 6, group: 18, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶", description: "Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas." },

                { number: 87, symbol: "Fr", name: "Francium", mass: "[223]", category: "alkali", period: 7, group: 1, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s¹", description: "Francium is a chemical element with symbol Fr and atomic number 87. It was discovered by Marguerite Perey in France in 1939. It is the second-most electropositive element, behind only caesium, and is the second rarest naturally occurring element." },
                { number: 88, symbol: "Ra", name: "Radium", mass: "[226]", category: "alkaline", period: 7, group: 2, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s²", description: "Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals." },

                { number: 89, symbol: "Ac", name: "Actinium", mass: "[227]", category: "actinide", period: 7, group: 3, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 6d¹", description: "Actinium is a chemical element with symbol Ac and atomic number 89. It was discovered in 1899 by French chemist André-Louis Debierne and independently by Friedrich Oskar Giesel in 1902." },
                { number: 104, symbol: "Rf", name: "Rutherfordium", mass: "[267]", category: "transition", period: 7, group: 4, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d²", description: "Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element that is not found in nature." },
                { number: 105, symbol: "Db", name: "Dubnium", mass: "[268]", category: "transition", period: 7, group: 5, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d³", description: "Dubnium is a chemical element with symbol Db and atomic number 105. It is a highly radioactive synthetic element." },
                { number: 106, symbol: "Sg", name: "Seaborgium", mass: "[269]", category: "transition", period: 7, group: 6, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁴", description: "Seaborgium is a chemical element with symbol Sg and atomic number 106. It is named after the American nuclear chemist Glenn T. Seaborg." },
                { number: 107, symbol: "Bh", name: "Bohrium", mass: "[270]", category: "transition", period: 7, group: 7, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁵", description: "Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr." },
                { number: 108, symbol: "Hs", name: "Hassium", mass: "[269]", category: "transition", period: 7, group: 8, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁶", description: "Hassium is a chemical element with symbol Hs and atomic number 108. It is named after the German state of Hesse." },
                { number: 109, symbol: "Mt", name: "Meitnerium", mass: "[278]", category: "transition", period: 7, group: 9, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁷", description: "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is named after Lise Meitner." },
                { number: 110, symbol: "Ds", name: "Darmstadtium", mass: "[281]", category: "transition", period: 7, group: 10, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁸", description: "Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is named after Darmstadt, Germany, where it was discovered." },
                { number: 111, symbol: "Rg", name: "Roentgenium", mass: "[282]", category: "transition", period: 7, group: 11, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁹", description: "Roentgenium is a chemical element with symbol Rg and atomic number 111. It is named after the physicist Wilhelm Röntgen." },
                { number: 112, symbol: "Cn", name: "Copernicium", mass: "[285]", category: "transition", period: 7, group: 12, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰", description: "Copernicium is a chemical element with symbol Cn and atomic number 112. It is named after astronomer Nicolaus Copernicus." },

                { number: 113, symbol: "Nh", name: "Nihonium", mass: "[286]", category: "post", period: 7, group: 13, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p¹", description: "Nihonium is a chemical element with symbol Nh and atomic number 113. It is named after Japan (Nihon in Japanese)." },
                { number: 114, symbol: "Fl", name: "Flerovium", mass: "[289]", category: "post", period: 7, group: 14, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p²", description: "Flerovium is a chemical element with symbol Fl and atomic number 114. It is named after the Flerov Laboratory of Nuclear Reactions in Russia." },
                { number: 115, symbol: "Mc", name: "Moscovium", mass: "[290]", category: "post", period: 7, group: 15, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p³", description: "Moscovium is a chemical element with symbol Mc and atomic number 115. It is named after the Moscow Oblast in Russia." },
                { number: 116, symbol: "Lv", name: "Livermorium", mass: "[293]", category: "post", period: 7, group: 16, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁴", description: "Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is named after the Lawrence Livermore National Laboratory in the US." },
                { number: 117, symbol: "Ts", name: "Tennessine", mass: "[294]", category: "halogen", period: 7, group: 17, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁵", description: "Tennessine is a synthetic chemical element with symbol Ts and atomic number 117. It is named after the U.S. state of Tennessee." },
                { number: 118, symbol: "Og", name: "Oganesson", mass: "[294]", category: "noble", period: 7, group: 18, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁶", description: "Oganesson is a synthetic chemical element with symbol Og and atomic number 118. It was named after the Russian nuclear physicist Yuri Oganessian." },

                // Lanthanides (57-71)
                { number: 58, symbol: "Ce", name: "Cerium", mass: "140.12", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹ 5d¹", description: "Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air." },
                { number: 59, symbol: "Pr", name: "Praseodymium", mass: "140.91", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f³", description: "Praseodymium is a chemical element with symbol Pr and atomic number 59. It is a soft, silvery, malleable and ductile metal, valued for its magnetic, electrical, chemical, and optical properties." },
                { number: 60, symbol: "Nd", name: "Neodymium", mass: "144.24", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁴", description: "Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air." },
                { number: 61, symbol: "Pm", name: "Promethium", mass: "[145]", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁵", description: "Promethium is a chemical element with symbol Pm and atomic number 61. All of its isotopes are radioactive; it is extremely rare, with only about 500–600 grams naturally occurring in Earth's crust at any given time." },
                { number: 62, symbol: "Sm", name: "Samarium", mass: "150.36", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁶", description: "Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that slowly oxidizes in air." },
                { number: 63, symbol: "Eu", name: "Europium", mass: "151.96", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁷", description: "Europium is a chemical element with symbol Eu and atomic number 63. It is a moderately hard, silvery metal which readily oxidizes in air and water." },
                { number: 64, symbol: "Gd", name: "Gadolinium", mass: "157.25", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁷ 5d¹", description: "Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable, and ductile rare-earth metal." },
                { number: 65, symbol: "Tb", name: "Terbium", mass: "158.93", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁹", description: "Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white, rare earth metal that is malleable, ductile, and soft enough to be cut with a knife." },
                { number: 66, symbol: "Dy", name: "Dysprosium", mass: "162.50", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁰", description: "Dysprosium is a chemical element with symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster." },
                { number: 67, symbol: "Ho", name: "Holmium", mass: "164.93", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹¹", description: "Holmium is a chemical element with symbol Ho and atomic number 67. It is a relatively soft and malleable silvery-white metal." },
                { number: 68, symbol: "Er", name: "Erbium", mass: "167.26", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹²", description: "Erbium is a chemical element with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements." },
                { number: 69, symbol: "Tm", name: "Thulium", mass: "168.93", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹³", description: "Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and third-last element in the lanthanide series." },
                { number: 70, symbol: "Yb", name: "Ytterbium", mass: "173.05", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴", description: "Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series." },
                { number: 71, symbol: "Lu", name: "Lutetium", mass: "174.97", category: "lanthanide", period: 6, group: 101, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹", description: "Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry air, but not in moist air." },

                // Actinides (89-103)
                { number: 90, symbol: "Th", name: "Thorium", mass: "232.04", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 6d²", description: "Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only three radioactive elements that still occur naturally in large quantities as a primordial element." },
                { number: 91, symbol: "Pa", name: "Protactinium", mass: "231.04", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f² 6d¹", description: "Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids." },
                { number: 92, symbol: "U", name: "Uranium", mass: "238.03", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f³ 6d¹", description: "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table." },
                { number: 93, symbol: "Np", name: "Neptunium", mass: "[237]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁴ 6d¹", description: "Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element." },
                { number: 94, symbol: "Pu", name: "Plutonium", mass: "[244]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁶", description: "Plutonium is a radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance." },
                { number: 95, symbol: "Am", name: "Americium", mass: "[243]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁷", description: "Americium is a synthetic radioactive chemical element with symbol Am and atomic number 95. It is a transuranic member of the actinide series." },
                { number: 96, symbol: "Cm", name: "Curium", mass: "[247]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁷ 6d¹", description: "Curium is a synthetic radioactive chemical element with symbol Cm and atomic number 96. This transuranic element of the actinide series was named after Marie and Pierre Curie." },
                { number: 97, symbol: "Bk", name: "Berkelium", mass: "[247]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁹", description: "Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series." },
                { number: 98, symbol: "Cf", name: "Californium", mass: "[251]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁰", description: "Californium is a radioactive chemical element with symbol Cf and atomic number 98. The element was first synthesized in 1950 at the Lawrence Berkeley National Laboratory." },
                { number: 99, symbol: "Es", name: "Einsteinium", mass: "[252]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹¹", description: "Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide." },
                { number: 100, symbol: "Fm", name: "Fermium", mass: "[257]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹²", description: "Fermium is a synthetic element with symbol Fm and atomic number 100. It is an actinide and the heaviest element that can be formed by neutron bombardment of lighter elements." },
                { number: 101, symbol: "Md", name: "Mendelevium", mass: "[258]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹³", description: "Mendelevium is a synthetic element with symbol Md and atomic number 101. A metallic radioactive transuranic element in the actinide series." },
                { number: 102, symbol: "No", name: "Nobelium", mass: "[259]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴", description: "Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science." },
                { number: 103, symbol: "Lr", name: "Lawrencium", mass: "[266]", category: "actinide", period: 7, group: 102, electron: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 7p¹", description: "Lawrencium is a synthetic chemical element with symbol Lr and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron." }
            ];

            // Function to get color based on category
            function getCategoryColor(category) {
                switch (category) {
                    case 'alkali': return 'bg-alkali';
                    case 'alkaline': return 'bg-alkaline';
                    case 'transition': return 'bg-transition';
                    case 'post': return 'bg-post';
                    case 'metalloid': return 'bg-metalloid';
                    case 'nonmetal': return 'bg-nonmetal';
                    case 'halogen': return 'bg-halogen';
                    case 'noble': return 'bg-noble';
                    case 'lanthanide': return 'bg-lanthanide';
                    case 'actinide': return 'bg-actinide';
                    default: return 'bg-gray-300';
                }
            }

            // Function to get proper category name
            function getCategoryName(category) {
                switch (category) {
                    case 'alkali': return 'Alkali Metal';
                    case 'alkaline': return 'Alkaline Earth Metal';
                    case 'transition': return 'Transition Metal';
                    case 'post': return 'Post-Transition Metal';
                    case 'metalloid': return 'Metalloid';
                    case 'nonmetal': return 'Nonmetal';
                    case 'halogen': return 'Halogen';
                    case 'noble': return 'Noble Gas';
                    case 'lanthanide': return 'Lanthanide';
                    case 'actinide': return 'Actinide';
                    default: return 'Unknown';
                }
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

                // Show modal
                modal.classList.remove('hidden');
            }

            // Close modal when close button is clicked
            document.getElementById('close-modal').addEventListener('click', () => {
                document.getElementById('element-modal').classList.add('hidden');
            });

            // Close modal when clicking outside
            document.getElementById('element-modal').addEventListener('click', (event) => {
                if (event.target === document.getElementById('element-modal')) {
                    document.getElementById('element-modal').classList.add('hidden');
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
        