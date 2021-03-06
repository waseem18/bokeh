declare namespace Bokeh {
    var version: string;

    var index: {[key: string]: Model};

    var _: UnderscoreStatic;

    var logger: JSNLog.JSNLogLogger;

    type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";
    function set_log_level(level: LogLevel): void;

    namespace embed {
        export function add_document_static(element: HTMLElement, doc: Document, use_for_title?: boolean): void;
    }

    namespace LinAlg {
        export function transpose<T>(array: Array<Array<T>>): Array<Array<T>>;
        export function linspace(start: number, stop: number, num?: Int): Array<number>;
        export function arange(start: number, stop: number, step?: number): Array<number>;
    }
}
