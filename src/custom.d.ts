declare module "*.svg" {
    import { ImgHTMLAttributes } from 'react';
    const content: React.DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>>;
    export default content;
}