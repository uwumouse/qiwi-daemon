"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyword = void 0;
// This is 5 paragraphs of Lorem Ipsum
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris id odio vestibulum cursus. Nunc ut egestas justo. Praesent id dui porta, consequat purus sit amet, bibendum nunc. Maecenas venenatis urna libero, ut tempor eros venenatis vitae. Pellentesque pellentesque tempor lorem, eget tempor massa blandit at. Aliquam pellentesque, nisl nec varius accumsan, elit ligula commodo nulla, a egestas felis orci vitae risus. Phasellus rhoncus nisi quis massa gravida consequat. Duis ornare tempor nunc eu tempor. Quisque neque felis, molestie nec feugiat eu, cursus ut sem. Mauris at nibh quis sem fringilla tincidunt eu ut felis. Vivamus at dui non turpis facilisis aliquet ac non leo. Aenean neque erat, efficitur a nibh eget, luctus tristique massa. Donec a tincidunt velit, id blandit magna. Nulla molestie tincidunt lorem, sit amet commodo lacus suscipit eget. Nulla facilisi. Nullam sed fringilla libero, a pharetra nisi. Quisque vestibulum congue velit a finibus. Aenean eu varius nulla. Nam euismod, diam non porta accumsan, felis odio porttitor ipsum, et sodales justo sem vel ipsum. Praesent interdum nibh iaculis dolor aliquam, a porttitor massa pellentesque. Suspendisse sed ultricies arcu. Morbi iaculis interdum sem quis tempus. Quisque eu egestas lorem, at convallis elit. Nunc venenatis ipsum sed dui sodales, imperdiet convallis neque pulvinar. Integer euismod leo turpis, mollis bibendum tellus posuere ut. Aliquam non lectus sem. Duis imperdiet id nulla id sagittis. Aenean tincidunt rhoncus ultrices. Vivamus est nibh, bibendum quis mi faucibus, accumsan semper magna. Aenean nibh mauris, hendrerit ut pharetra non, pretium non risus. Nunc a sem libero. Curabitur sit amet efficitur quam. Vestibulum consequat felis orci, vitae volutpat augue condimentum finibus. In sed metus nec massa convallis ultricies. Sed laoreet turpis vel rutrum ultricies. Donec posuere et lectus at vestibulum. Sed fringilla dignissim molestie. Quisque sed magna ligula. Nullam ut tempor erat. Nunc sapien nulla, vulputate vitae gravida aliquet, luctus a felis. Ut massa risus, laoreet non purus ut, ullamcorper consectetur erat. Aliquam sem libero, porta sed velit ut, ornare facilisis est. Vestibulum venenatis mi sed ex vulputate efficitur. Praesent ornare purus odio, eget scelerisque neque iaculis at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac finibus est. Donec eu dolor fermentum, ultrices quam blandit, eleifend quam. Sed a tincidunt ipsum. Maecenas ultrices ante eu neque porta facilisis. Donec sed lectus nibh. Aliquam sed tempor ipsum. Cras quis nibh eget orci rhoncus auctor non nec massa. Aliquam erat volutpat. Fusce aliquet dapibus tellus, pharetra placerat quam facilisis sit amet. Nunc sed est dignissim, tempor dui in, pulvinar nunc. Proin quis neque hendrerit, feugiat libero vitae, finibus sapien.";
const words = lorem
    .replace(".", "")
    .replace(",", "")
    .toLowerCase()
    .split(" ")
    .filter((w) => w.length >= 5);
function getKeyword() {
    // Return random item from array of words
    return words[Math.floor(Math.random() * words.length)];
}
exports.getKeyword = getKeyword;