/*!
 * iframeActivationListener JavaScript Library v1.0
 * https://github.com/SammySoft/iframeActivationListener
 *
 *
 * Copyright 2016 SammySoft
 * Released under the MIT license
 *
 * Date: Fri Jan 21 2016 20:00:00 GMT+01:00
 * 
 * Copyright (c) 2016 SammySoft
 * 
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function ($)
{
	var iframeActivationListener = function () {
		'use strict';

		var
			intervalId = undefined,
			oldActiveElement = undefined,
			startListening = function ()
			{
				this.off("mouseover", iframeMouseOver);
				this.on("mouseover", iframeMouseOver);

				this.off("mouseout", iframeMouseOut);
				this.on("mouseout", iframeMouseOut);
			},
			stopListening = function ()
			{
				this.off("mouseover", iframeMouseOver);
				this.off("mouseout", iframeMouseOut);
			},
			startWatching = function ()
			{
				if (intervalId === undefined)
				{
					oldActiveElement = document.activeElement;
					intervalId = setInterval(checkActiveElementChange, 100);
				}
			},
			stopWatching = function ()
			{
				if (intervalId !== undefined)
				{
					clearInterval(intervalId);
					intervalId = undefined;
				}
			},
			checkActiveElementChange = function ()
			{
				if (oldActiveElement !== document.activeElement)
				{
					if (document.activeElement.tagName.toLowerCase() === 'iframe')
					{
						var iframe = document.activeElement;

						stopWatching();

						$(iframe).trigger({
							type: "activate",
							target: iframe
						});
					}
				}
			},
			iframeMouseOver = function (ev)
			{
				if (ev.target === document.activeElement)
					return;

				startWatching();
			},
			iframeMouseOut = function (ev)
			{
				stopWatching();
			};

		return {
			startListening: startListening,
			stopListening: stopListening
		};
	}();
	$.fn.extend({
		iframeActivationListener: iframeActivationListener.startListening,
		iframeActivationListenerStop: iframeActivationListener.stopListening
	});
})(jQuery);
