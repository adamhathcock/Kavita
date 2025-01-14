import { Observable } from "rxjs";
import { PAGING_DIRECTION } from "./reader-enums";
import { ReaderSetting } from "./reader-setting";

/**
 * A generic interface for an image renderer 
 */
export interface ImageRenderer {

    /**
     * Updates with menu items that may affect renderer. This keeps reader and menu/parent in sync.
     */
    readerSettings$: Observable<ReaderSetting>;
    /**
     * The current Image 
     */
    image$: Observable<HTMLImageElement | null>;
    /**
     * When a page is bookmarked or unbookmarked. Emits with page number.
     */
    bookmark$: Observable<number>;
    /**
     * Performs a rendering pass. This is passed one or more images to render from prefetcher
     */
    renderPage(img: Array<HTMLImageElement | null>): void;
    /**
     * If a valid move next page should occur, this will return true. Otherwise, this will return false. 
     */
    shouldMovePrev(): boolean;
    /**
     * If a valid move prev page should occur, this will return true. Otherwise, this will return false. 
     */
    shouldMoveNext(): boolean;
    /**
     * Returns the number of pages that should occur based on page direction and internal state of the renderer.
     */
    getPageAmount(direction: PAGING_DIRECTION): number;
    /**
     * When layout shifts occur, where a re-render might be needed but from menu option (like split option changed on a split image), this will be called.
     * This should reset any needed state, but not unset the image.
     */
    reset(): void;
    

}