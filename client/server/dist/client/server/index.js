"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const distPath = path_1.default.resolve(__dirname, '../../dist');
app.use(express_1.default.static(distPath));
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(distPath, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
