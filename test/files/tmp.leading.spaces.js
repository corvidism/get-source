import ExtensibleError from './ExtensibleError';
/**
 * The IMA application error extends the native `Error` with additional details
 * that lead to the error and the HTTP status code to send to the client.
 *
 * Implementation note: This is an interface that extends the abstract class
 * {@link ExtensibleError}, which does not make much sense from the strict
 * OOP standpoint, but is necessary due to limitations of JavaScript, so that
 * IMA errors are instances of both the native errors and of this interface.
 *
 * @interface
 * @extends ExtensibleError
 */
class Error extends ExtensibleError {
    /**
     * Returns the HTTP status to send to the client.
     *
     * If the error has occurred at the client-side, the status code is used to
     * determine the error page to show to the user.
     *
     * This method is a shorthand for the following code snippet:
     * `this.getParams().status || 500`.
     *
     * @return {number} The HTTP status to send to the client.
     * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     */
    getHttpStatus() { }
    /**
     * Returns the error parameters providing additional details about the
     * error. The structure of the returned object is always
     * situation-dependent, but the returned object usually contains the
     * `status: number` field which represents the HTTP status to send to
     * the client.
     *
     * @return {Object<string, *>} The route parameters of the route at which
     *         the error has occurred.
     * @see Error#getHttpStatus
     */
    getParams() { }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxPQUFPLE9BQU8sS0FBTSxTQUFRLGVBQWU7SUFDaEQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxhQUFhLEtBQUksQ0FBQztJQUVsQjs7Ozs7Ozs7OztPQVVHO0lBQ0gsU0FBUyxLQUFJLENBQUM7Q0FDZiIsImZpbGUiOiJlcnJvci9FcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRlbnNpYmxlRXJyb3IgZnJvbSAnLi9FeHRlbnNpYmxlRXJyb3InO1xuXG4vKipcbiAqIFRoZSBJTUEgYXBwbGljYXRpb24gZXJyb3IgZXh0ZW5kcyB0aGUgbmF0aXZlIGBFcnJvcmAgd2l0aCBhZGRpdGlvbmFsIGRldGFpbHNcbiAqIHRoYXQgbGVhZCB0byB0aGUgZXJyb3IgYW5kIHRoZSBIVFRQIHN0YXR1cyBjb2RlIHRvIHNlbmQgdG8gdGhlIGNsaWVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBub3RlOiBUaGlzIGlzIGFuIGludGVyZmFjZSB0aGF0IGV4dGVuZHMgdGhlIGFic3RyYWN0IGNsYXNzXG4gKiB7QGxpbmsgRXh0ZW5zaWJsZUVycm9yfSwgd2hpY2ggZG9lcyBub3QgbWFrZSBtdWNoIHNlbnNlIGZyb20gdGhlIHN0cmljdFxuICogT09QIHN0YW5kcG9pbnQsIGJ1dCBpcyBuZWNlc3NhcnkgZHVlIHRvIGxpbWl0YXRpb25zIG9mIEphdmFTY3JpcHQsIHNvIHRoYXRcbiAqIElNQSBlcnJvcnMgYXJlIGluc3RhbmNlcyBvZiBib3RoIHRoZSBuYXRpdmUgZXJyb3JzIGFuZCBvZiB0aGlzIGludGVyZmFjZS5cbiAqXG4gKiBAaW50ZXJmYWNlXG4gKiBAZXh0ZW5kcyBFeHRlbnNpYmxlRXJyb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBFeHRlbnNpYmxlRXJyb3Ige1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgSFRUUCBzdGF0dXMgdG8gc2VuZCB0byB0aGUgY2xpZW50LlxuICAgKlxuICAgKiBJZiB0aGUgZXJyb3IgaGFzIG9jY3VycmVkIGF0IHRoZSBjbGllbnQtc2lkZSwgdGhlIHN0YXR1cyBjb2RlIGlzIHVzZWQgdG9cbiAgICogZGV0ZXJtaW5lIHRoZSBlcnJvciBwYWdlIHRvIHNob3cgdG8gdGhlIHVzZXIuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGEgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nIGNvZGUgc25pcHBldDpcbiAgICogYHRoaXMuZ2V0UGFyYW1zKCkuc3RhdHVzIHx8IDUwMGAuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIEhUVFAgc3RhdHVzIHRvIHNlbmQgdG8gdGhlIGNsaWVudC5cbiAgICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzEwLmh0bWxcbiAgICovXG4gIGdldEh0dHBTdGF0dXMoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcnJvciBwYXJhbWV0ZXJzIHByb3ZpZGluZyBhZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlXG4gICAqIGVycm9yLiBUaGUgc3RydWN0dXJlIG9mIHRoZSByZXR1cm5lZCBvYmplY3QgaXMgYWx3YXlzXG4gICAqIHNpdHVhdGlvbi1kZXBlbmRlbnQsIGJ1dCB0aGUgcmV0dXJuZWQgb2JqZWN0IHVzdWFsbHkgY29udGFpbnMgdGhlXG4gICAqIGBzdGF0dXM6IG51bWJlcmAgZmllbGQgd2hpY2ggcmVwcmVzZW50cyB0aGUgSFRUUCBzdGF0dXMgdG8gc2VuZCB0b1xuICAgKiB0aGUgY2xpZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3Q8c3RyaW5nLCAqPn0gVGhlIHJvdXRlIHBhcmFtZXRlcnMgb2YgdGhlIHJvdXRlIGF0IHdoaWNoXG4gICAqICAgICAgICAgdGhlIGVycm9yIGhhcyBvY2N1cnJlZC5cbiAgICogQHNlZSBFcnJvciNnZXRIdHRwU3RhdHVzXG4gICAqL1xuICBnZXRQYXJhbXMoKSB7fVxufVxuIl19
