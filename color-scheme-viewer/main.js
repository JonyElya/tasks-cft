
export function findUniqueColors() {
  let hexCodeRgb = /#[0-9a-f]{6}/g;
  let codeRgb = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/g;
  let codeRgba = /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), ([0-1])\)/g;
  let initialArray = [];
  for (let i = 0; i < document.styleSheets.length; i++) {
    for (let j = 0; j < document.styleSheets[i].cssRules.length; j++) {
      let text = document.styleSheets[i].cssRules[j].cssText;
      let match;
      while ((match = hexCodeRgb.exec(text)) !== null) {
        initialArray.push(match[0]);
      }
      while ((match = codeRgb.exec(text)) !== null) {
        initialArray.push(match[0]);
      }
      while ((match = codeRgba.exec(text)) !== null) {
        initialArray.push(match[0]);
      }
    }
  }
  const uniqueColors = new Set(initialArray);
  return [...uniqueColors];
}

export function Draw(element, arrayOfColors) {
  for (let i = 0; i < arrayOfColors.length; i++) {
    let tile = document.createElement("div");
    tile.style.backgroundColor = arrayOfColors[i];
    element.appendChild(tile);
  }
  let quantity = document.createElement("p");
  quantity.innerHTML = `Количество: ${arrayOfColors.length}`;
  element.appendChild(quantity);
}

export function FindRules(element, target) {
  let arrayOfColorMatches = [];
  let info = document.createElement("span");
  let color = target.style.backgroundColor;
    for (let i = 0; i < document.styleSheets.length; i++) {
      for (let j = 0; j < document.styleSheets[i].cssRules.length; j++) {
        let text = document.styleSheets[i].cssRules[j].cssText;
        if (text.search(color) !== -1) {
          arrayOfColorMatches.push(text);
        }
      }
    }
  info.innerHTML = arrayOfColorMatches
  element.appendChild(info);
}

export function searchColors(str, array) {
  let arrayOfSearchedColors = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(str)) {
      arrayOfSearchedColors.push(array[i]);
    }
  }
  return arrayOfSearchedColors
}