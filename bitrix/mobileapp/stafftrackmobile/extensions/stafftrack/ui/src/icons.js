/**
 * @module stafftrack/ui/icons
 */
jn.define('stafftrack/ui/icons', (require, exports, module) => {
	const { Color } = require('tokens');

	const base8 = Color.base8.toHex();
	const baseWhiteFixed = Color.baseWhiteFixed.toHex();
	const primary = Color.accentMainPrimary.toHex();
	const primaryAlt = Color.accentMainPrimaryalt.toHex();
	const success = Color.accentMainSuccess.toHex();
	const blue = Color.accentSoftBlue1.toHex();

	const disabledCheckInIcon = `<svg width="291" height="140" viewBox="0 0 291 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M227.999 79.0708C227.999 75.1773 224.823 72.0313 220.93 72.0697L192.931 72.3456C189.092 72.3835 186 75.5062 186 79.3453V102.978C186 107.011 189.4 110.21 193.426 109.965L213.253 108.757L217.468 115.566C217.868 116.212 218.813 116.194 219.188 115.534L223.386 108.14C225.976 107.983 227.996 105.837 227.996 103.242V92.7692L227.999 79.0708Z" fill="${primary}" fill-opacity="0.78"/><path d="M213.678 108.494C213.581 108.338 213.406 108.247 213.222 108.258L193.395 109.466C189.657 109.694 186.5 106.723 186.5 102.978V79.3453C186.5 75.7804 189.371 72.8808 192.936 72.8456L220.934 72.5697C224.55 72.534 227.499 75.4553 227.499 79.0707L227.496 92.7691V92.7692V103.242C227.496 105.572 225.682 107.5 223.355 107.641C223.187 107.652 223.034 107.746 222.951 107.894L218.753 115.287C218.566 115.617 218.093 115.626 217.893 115.303L213.678 108.494Z" stroke="${baseWhiteFixed}" stroke-opacity="0.18" stroke-linejoin="round"/><g filter="url(#filter0_d_943_31187)"><path d="M197.915 83.4217L217.205 83.0003C218.196 82.9801 219 83.9509 219 85.1745C219 86.3948 218.196 87.4094 217.205 87.4398L197.915 87.9993C196.856 88.0297 196 87.0285 196 85.7611C196 84.4936 196.86 83.4486 197.915 83.425V83.4217Z" fill="${baseWhiteFixed}" fill-opacity="0.9" shape-rendering="crispEdges"/></g><g filter="url(#filter1_d_943_31187)"><path d="M197.915 93.6817L217.205 93.001C218.196 92.966 219 93.8726 219 95.0242C219 96.1757 218.196 97.1459 217.205 97.1873L197.915 97.9985C196.856 98.043 196 97.1109 196 95.9149C196 94.7188 196.86 93.7199 197.915 93.6817Z" fill="${baseWhiteFixed}" fill-opacity="0.9" shape-rendering="crispEdges"/></g><path d="M115 18.9354C115 11.9537 120.937 6.44605 127.899 6.96911L165.899 9.82405C172.16 10.2944 177 15.5117 177 21.7903V117.109C177 123.289 172.306 128.458 166.155 129.053L128.155 132.728C121.104 133.41 115 127.867 115 120.784V18.9354Z" fill="${blue}" fill-opacity="0.8"/><path d="M115.5 18.9354C115.5 12.2446 121.19 6.96644 127.862 7.4677L165.862 10.3226C171.862 10.7734 176.5 15.7733 176.5 21.7903V117.109C176.5 123.031 172.002 127.985 166.107 128.555L128.107 132.23C121.35 132.884 115.5 127.572 115.5 120.784V18.9354Z" stroke="${base8}" stroke-opacity="0.24"/><path d="M172 27.4446C172 22.8564 175.851 19.2084 180.432 19.4563L203.432 20.7007C207.676 20.9304 211 24.4387 211 28.689V53.9124C211 58.3647 207.365 61.9604 202.913 61.9119L179.913 61.6615C175.529 61.6137 172 58.0462 172 53.6619V27.4446Z" fill="${primary}" fill-opacity="0.78"/><path d="M172.5 27.4446C172.5 23.1432 176.11 19.7231 180.405 19.9555L203.405 21.2C207.384 21.4153 210.5 24.7044 210.5 28.689V53.9124C210.5 58.0865 207.092 61.4574 202.918 61.412L179.918 61.1615C175.808 61.1167 172.5 57.7722 172.5 53.6619V27.4446Z" stroke="${baseWhiteFixed}" stroke-opacity="0.18"/><path d="M140.056 15.0034L156.057 15.9254C157.132 15.988 158 16.9469 158 18.0681C158 19.1892 157.132 20.0543 156.057 19.9973L140.056 19.1778C138.923 19.1209 138 18.1335 138 16.9782C138 15.8201 138.923 14.938 140.056 15.0034Z" fill="${baseWhiteFixed}" fill-opacity="0.4"/><path d="M135.334 121.564L161.772 119.004C162.452 118.939 163 119.623 163 120.532C163 121.441 162.452 122.234 161.772 122.303L135.334 124.995C134.599 125.068 134 124.361 134 123.413C134 122.466 134.596 121.638 135.334 121.568V121.564Z" fill="${baseWhiteFixed}" fill-opacity="0.4"/><path d="M61 48.3504C61 41.5877 66.5854 36.1608 73.3453 36.3554L109.345 37.3919C115.836 37.5787 121 42.894 121 49.3869V89.5325C121 95.922 115.993 101.191 109.612 101.517L73.6122 103.356C66.7532 103.706 61 98.2393 61 91.3714V48.3504Z" fill="${success}" fill-opacity="0.78"/><path d="M61.5 48.3504C61.5 41.8695 66.8527 36.6687 73.3309 36.8552L109.331 37.8916C115.551 38.0707 120.5 43.1645 120.5 49.3869V89.5325C120.5 95.6557 115.702 100.705 109.587 101.017L73.5867 102.856C67.0135 103.192 61.5 97.9531 61.5 91.3714V48.3504Z" stroke="${baseWhiteFixed}" stroke-opacity="0.18"/><g filter="url(#filter2_d_943_31187)"><path d="M87.2477 49.6532C87.173 49.7085 87.1059 49.7703 87.0424 49.8386H87.0462C83.7286 52.622 82.6053 57.8635 83.5308 62.4353C84.4824 67.1176 87.5201 71.0228 92.3677 70.9643C95.2411 70.9285 97.4615 69.4978 98.9655 67.342C100.484 65.2057 101.275 62.3573 101.328 59.5284C101.38 56.6995 100.697 53.8511 99.2379 51.705V51.6985C97.7676 49.5524 95.5098 48.0665 92.3677 48.0014C91.4944 47.9819 90.5055 48.164 89.5726 48.4827C88.6172 48.8013 87.8112 49.2305 87.2477 49.6532Z" fill="${baseWhiteFixed}" fill-opacity="0.9" shape-rendering="crispEdges"/><path d="M108 87.4857C107.395 77.513 99.5774 75.1068 92.3862 75.2401L92.3825 75.2369C85.0384 75.3734 76.668 78.1958 76 88.6725C76 89.4334 76.5747 90.0252 77.28 89.9992L106.828 88.8449C107.478 88.8188 108 88.2108 108 87.4857Z" fill="${baseWhiteFixed}" fill-opacity="0.9" shape-rendering="crispEdges"/></g><g filter="url(#filter3_d_943_31187)"><path fill-rule="evenodd" clip-rule="evenodd" d="M192.562 53C192.562 53 200 46.3349 200 39.493C200 37.0727 199.223 34.7222 197.834 32.9443C196.44 31.1616 194.547 30.1051 192.562 30.0074C190.576 29.9096 188.647 30.7893 187.227 32.4556C185.802 34.1265 185 36.449 185 38.9112C185 45.8648 192.562 53 192.562 53ZM196.291 38.7762C196.291 41.1453 194.624 43.0117 192.557 42.9419C190.489 42.8721 188.791 40.8753 188.791 38.483C188.791 36.0906 190.478 34.2289 192.557 34.322C194.635 34.4151 196.291 36.4071 196.291 38.7809V38.7762Z" fill="${baseWhiteFixed}" fill-opacity="0.9" shape-rendering="crispEdges"/></g><g filter="url(#filter4_d_943_31187)"><path fill-rule="evenodd" clip-rule="evenodd" d="M142.389 52C140.911 51.9924 139.71 53.3179 139.71 54.9614V55.946H138.578C135.506 55.9421 133 58.7043 133 62.1139V82.039C133 85.4486 135.506 88.1149 138.578 87.9962L159.78 87.1763C162.671 87.0652 165 84.3222 165 81.0467V61.907C165 58.6315 162.671 55.9728 159.78 55.969H158.726V55.0035C158.726 53.3983 157.581 52.0881 156.155 52.0805C154.729 52.0728 153.567 53.3754 153.567 54.992V55.9613L145.051 55.9536V54.9729C145.051 53.3409 143.867 52.0077 142.389 52ZM146.322 71.4117L148.03 73.2778L153.864 66.3261C154.452 65.6262 155.523 65.6087 156.133 66.2891C156.631 66.8444 156.646 67.6811 156.168 68.2537L148.14 77.8731C148.084 77.9407 147.981 77.9441 147.92 77.8803L143.959 73.5814C143.411 72.9866 143.392 72.0766 143.914 71.459C144.539 70.721 145.669 70.6988 146.322 71.4117Z" fill="${baseWhiteFixed}" fill-opacity="0.9" shape-rendering="crispEdges"/></g><defs><filter id="filter0_d_943_31187" x="186" y="77" width="43" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_943_31187"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_943_31187" result="shape"/></filter><filter id="filter1_d_943_31187" x="186" y="87" width="43" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_943_31187"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_943_31187" result="shape"/></filter><filter id="filter2_d_943_31187" x="66" y="42" width="52" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_943_31187"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_943_31187" result="shape"/></filter><filter id="filter3_d_943_31187" x="175" y="24" width="35" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_943_31187"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_943_31187" result="shape"/></filter><filter id="filter4_d_943_31187" x="123" y="46" width="52" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_943_31187"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_943_31187" result="shape"/></filter></defs></svg>`;
	const checkInAhaIcon = `<svg width="78" height="79" viewBox="0 0 78 79" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1422_123166)"><path d="M22 8.02574C22 4.5137 25.0031 1.75254 28.5028 2.04685L50.5028 3.89691C53.6106 4.15826 56 6.75702 56 9.87581V68.4185C56 71.4811 53.6935 74.0521 50.6489 74.3833L28.6489 76.7767C25.0993 77.1628 22 74.3824 22 70.8119V8.02574Z" fill="${blue}" fill-opacity="0.8"/><path d="M22.5 8.02574C22.5 4.80637 25.2528 2.27531 28.4609 2.54509L50.4609 4.39515C53.3097 4.63473 55.5 7.01692 55.5 9.87581V68.4185C55.5 71.2259 53.3857 73.5826 50.5948 73.8863L28.5948 76.2796C25.341 76.6336 22.5 74.0849 22.5 70.8119V8.02574Z" stroke="${baseWhiteFixed}" stroke-opacity="0.24"/><path d="M34 8.07719C34 7.22642 34.7243 6.55571 35.5725 6.62096L45.6941 7.39955C46.431 7.45623 47 8.07068 47 8.80972C47 9.62849 46.3069 10.2762 45.49 10.2208L35.3618 9.53438C34.5952 9.48242 34 8.84548 34 8.07719Z" fill="${baseWhiteFixed}" fill-opacity="0.4"/><path d="M2 19.8269C2 16.3882 4.88417 13.6531 8.31798 13.8353L32.318 15.109C35.5036 15.2781 38 17.9104 38 21.1006V46.3764C38 49.6031 35.4481 52.252 32.2237 52.3723L8.22372 53.2678C4.82465 53.3946 2 50.6734 2 47.2719V19.8269Z" fill="${success}" fill-opacity="0.78"/><path d="M2.5 19.8269C2.5 16.6748 5.14383 14.1675 8.29148 14.3346L32.2915 15.6083C35.2117 15.7633 37.5 18.1763 37.5 21.1006V46.3764C37.5 49.3342 35.1608 51.7623 32.2051 51.8726L8.20508 52.7681C5.08926 52.8844 2.5 50.3899 2.5 47.2719V19.8269Z" stroke="${baseWhiteFixed}" stroke-opacity="0.18"/><path d="M48 47.9277C48 44.6593 50.6159 41.9922 53.8837 41.9288L69.8837 41.6186C73.2423 41.5535 76 44.2582 76 47.6175V63.7058C76 66.8324 73.5989 69.435 70.4824 69.6864L54.4824 70.9771C50.9899 71.2588 48 68.5004 48 64.9965V47.9277Z" fill="${primary}" fill-opacity="0.78"/><path d="M48.5 47.9277C48.5 44.9317 50.8979 42.4868 53.8934 42.4287L69.8934 42.1185C72.9721 42.0588 75.5 44.5382 75.5 47.6175V63.7058C75.5 66.5719 73.299 68.9576 70.4422 69.188L54.4422 70.4787C51.2407 70.737 48.5 68.2084 48.5 64.9965V47.9277Z" stroke="${baseWhiteFixed}" stroke-opacity="0.18"/><g filter="url(#filter0_d_1422_123166)"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1908 46.5C20.1908 46.5 29 38.6555 29 31.0187C29 28.3177 28.0902 25.7044 26.4581 23.7421C24.8132 21.7637 22.5645 20.5955 20.1908 20.5055C17.8171 20.4155 15.465 21.4358 13.7337 23.3543C11.9874 25.2888 11 27.9645 11 30.7832C11 38.7501 20.1908 46.5 20.1908 46.5ZM24.6407 30.3192C24.6407 32.9833 22.6594 35.1349 20.1908 35.128C17.7222 35.1211 15.6439 32.9071 15.6439 30.1876C15.6439 27.4681 17.6921 25.3142 20.1908 25.3812C22.6895 25.4481 24.6407 27.6574 24.6407 30.3192Z" fill="${baseWhiteFixed}" fill-opacity="0.9" shape-rendering="crispEdges"/></g><g filter="url(#filter1_d_1422_123166)"><path fill-rule="evenodd" clip-rule="evenodd" d="M70.644 48.9133C71.1187 49.4888 71.1187 50.4535 70.644 51.071L61.5228 62.9682C61.024 63.6183 60.2154 63.6812 59.7144 63.108L55.3856 58.1567C54.8715 57.5695 54.8715 56.5629 55.3856 55.9128C55.8976 55.2651 56.726 55.2161 57.2336 55.8033L60.6219 59.7155L68.9191 48.9856C69.3981 48.3681 70.1694 48.3355 70.6462 48.911L70.644 48.9133Z" fill="${baseWhiteFixed}" fill-opacity="0.9" shape-rendering="crispEdges"/></g></g><defs><filter id="filter0_d_1422_123166" x="1" y="14.5" width="38" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1422_123166"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1422_123166" result="shape"/></filter><filter id="filter1_d_1422_123166" x="45" y="42.5" width="36" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1422_123166"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1422_123166" result="shape"/></filter><clipPath id="clip0_1422_123166"><rect width="78" height="78" fill="${baseWhiteFixed}" transform="translate(0 0.5)"/></clipPath></defs></svg>`;
	const todayStatisticsDaySumIcon = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_442_49218)"><path opacity="0.8" d="M36.5217 18.6169C36.5217 11.8936 42.1508 6.56352 48.8115 6.97987L78.7087 8.84866C84.8104 9.23006 89.5652 14.3267 89.5652 20.4857V98.86C89.5652 104.922 84.9544 109.973 78.9584 110.479L49.0612 113.002C42.312 113.572 36.5217 108.207 36.5217 101.384V18.6169Z" fill="${blue}"/><path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M78.649 9.81841L48.7518 7.94962C42.6461 7.56797 37.4862 12.4539 37.4862 18.6169V101.384C37.4862 107.638 42.7939 112.556 48.9806 112.034L78.8779 109.51C84.3742 109.047 88.6008 104.417 88.6008 98.86V20.4857C88.6008 14.84 84.2422 10.168 78.649 9.81841ZM48.8115 6.97987C42.1508 6.56352 36.5217 11.8936 36.5217 18.6169V101.384C36.5217 108.207 42.312 113.572 49.0612 113.002L78.9584 110.479C84.9544 109.973 89.5652 104.922 89.5652 98.86V20.4857C89.5652 14.3267 84.8104 9.23006 78.7087 8.84866L48.8115 6.97987Z" fill="${blue}"/><g opacity="0.77" filter="url(#filter0_d_442_49218)"><path d="M14.7826 31.4179C14.7826 25.9221 19.4432 21.5289 25.0432 21.746L41.8234 22.3964C47.1191 22.6016 51.3043 26.8712 51.3043 32.0683V50.9103C51.3043 56.1921 46.9864 60.4988 41.6009 60.5883L24.8206 60.8673C19.3045 60.959 14.7826 56.5992 14.7826 51.1892V31.4179Z" fill="${primary}"/></g><path opacity="0.18" fill-rule="evenodd" clip-rule="evenodd" d="M41.7844 23.3635L25.0042 22.7132C19.9642 22.5178 15.7697 26.4717 15.7697 31.4179V51.1892C15.7697 56.0582 19.8394 59.982 24.8039 59.8995L41.5842 59.6205C46.4311 59.54 50.3173 55.6639 50.3173 50.9103V32.0683C50.3173 27.3909 46.5505 23.5483 41.7844 23.3635ZM25.0432 21.746C19.4432 21.5289 14.7826 25.9221 14.7826 31.4179V51.1892C14.7826 56.5992 19.3045 60.959 24.8206 60.8673L41.6009 60.5883C46.9864 60.4988 51.3043 56.1921 51.3043 50.9103V32.0683C51.3043 26.8712 47.1191 22.6016 41.8234 22.3964L25.0432 21.746Z" fill="${baseWhiteFixed}"/><g opacity="0.9" filter="url(#filter1_d_442_49218)"><path d="M39.9041 36.7531C39.9041 40.6336 37.4849 43.7569 34.4728 43.7323C31.4333 43.7041 28.949 40.4857 28.949 36.5419C28.949 32.5981 31.4642 29.4782 34.4728 29.5663C37.4814 29.6543 39.9041 32.8727 39.9041 36.7531Z" fill="${baseWhiteFixed}"/><path d="M43.4783 53.7926C43.4783 47.8029 39.0064 45.7817 34.4729 45.7571C29.8777 45.7324 25.2174 47.7571 25.2174 53.9123L43.4783 53.7926Z" fill="${baseWhiteFixed}"/></g><g opacity="0.77" filter="url(#filter2_d_442_49218)"><path d="M78.2609 65.332C78.2609 59.8362 82.9214 55.443 88.5214 55.6601L105.302 56.3104C110.597 56.5157 114.783 60.7852 114.783 65.9823V84.8243C114.783 90.1062 110.465 94.4129 105.079 94.5024L88.2989 94.7814C82.7828 94.8731 78.2609 90.5133 78.2609 85.1033V65.332Z" fill="${success}"/></g><g opacity="0.18" filter="url(#filter3_d_442_49218)"><path fill-rule="evenodd" clip-rule="evenodd" d="M105.263 57.2776L88.4824 56.6272C83.4425 56.4319 79.2479 60.3858 79.2479 65.332V85.1033C79.2479 89.9723 83.3177 93.8961 88.2822 93.8136L105.062 93.5346C109.909 93.454 113.796 89.578 113.796 84.8243V65.9823C113.796 61.3049 110.029 57.4623 105.263 57.2776ZM88.5214 55.6601C82.9214 55.443 78.2609 59.8362 78.2609 65.332V85.1033C78.2609 90.5133 82.7828 94.8731 88.2989 94.7814L105.079 94.5024C110.465 94.4129 114.783 90.1062 114.783 84.8243V65.9823C114.783 60.7852 110.597 56.5157 105.302 56.3104L88.5214 55.6601Z" fill="${baseWhiteFixed}"/></g><g opacity="0.9" filter="url(#filter4_d_442_49218)"><path fill-rule="evenodd" clip-rule="evenodd" d="M97.4664 63.4873C92.9414 63.6375 89.2754 67.6376 89.2754 72.4679C89.2754 77.6469 94.3121 84.6185 96.4854 87.378C96.9923 88.0227 97.9358 87.9653 98.4381 87.25C100.583 84.2123 105.507 76.7065 105.507 71.7659C105.507 66.8252 101.945 63.3372 97.4664 63.4829V63.4873ZM97.4664 76.0354C95.3964 76.1325 93.7629 74.4768 93.7629 72.2736C93.7629 70.0704 95.3964 68.2734 97.4664 68.1939C99.5365 68.1145 101.142 69.7702 101.142 71.9601C101.142 74.1501 99.5271 75.9426 97.4664 76.0398V76.0354Z" fill="${baseWhiteFixed}"/></g><g opacity="0.9" filter="url(#filter5_d_442_49218)"><path d="M57.2081 13.0511L71.5951 13.9113C72.8755 13.9989 73.913 14.555 73.913 16.2316C73.913 17.9082 72.879 18.3329 71.5951 18.2572L57.2081 17.5165C55.8687 17.4369 54.7826 16.8489 54.7826 15.1285C54.7826 14.2777 55.8721 12.9595 57.2081 13.0471V13.0511Z" fill="${baseWhiteFixed}"/></g></g><defs><filter id="filter0_d_442_49218" x="0.782593" y="11.7383" width="64.5217" height="67.1309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="7"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.114518 0 0 0 0 0.523572 0 0 0 0 1 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_442_49218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_442_49218" result="shape"/></filter><filter id="filter1_d_442_49218" x="15.2174" y="23.5645" width="38.2609" height="44.3477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_442_49218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_442_49218" result="shape"/></filter><filter id="filter2_d_442_49218" x="64.2609" y="45.6523" width="64.5217" height="67.1309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="7"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.345098 0 0 0 0 0.85098 0 0 0 0 0.639216 0 0 0 0.34 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_442_49218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_442_49218" result="shape"/></filter><filter id="filter3_d_442_49218" x="64.2609" y="45.6523" width="64.5217" height="67.1309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="7"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_442_49218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_442_49218" result="shape"/></filter><filter id="filter4_d_442_49218" x="77.6087" y="56.4785" width="39.5653" height="47.681" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4.66667"/><feGaussianBlur stdDeviation="5.83333"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_442_49218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_442_49218" result="shape"/></filter><filter id="filter5_d_442_49218" x="44.7826" y="7.04297" width="39.1305" height="25.2227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_442_49218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_442_49218" result="shape"/></filter><clipPath id="clip0_442_49218"><rect width="120" height="120" fill="${baseWhiteFixed}"/></clipPath></defs></svg>`;
	const todayStatisticsEmptyStateIcon = `<svg width="213" height="117" viewBox="0 0 213 117" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.77" filter="url(#filter0_d_428_51262)"><path d="M14 33.9618C14 26.9641 19.9633 21.4508 26.9396 21.9987L62.2743 24.7738C68.5181 25.2642 73.3348 30.474 73.3348 36.737V71.7427C73.3348 77.8625 68.7295 83.0019 62.6463 83.6708L27.3115 87.556C20.2077 88.3371 14 82.7745 14 75.6279V33.9618Z" fill="${success}"/></g><g opacity="0.18" filter="url(#filter1_d_428_51262)"><path d="M14.5 33.9618C14.5 27.2556 20.2148 21.9721 26.9004 22.4971L62.2352 25.2723C68.2188 25.7422 72.8348 30.7349 72.8348 36.737V71.7427C72.8348 77.6075 68.4214 82.5328 62.5917 83.1738L27.2569 87.059C20.4491 87.8075 14.5 82.4767 14.5 75.6279V33.9618Z" stroke="${baseWhiteFixed}" shape-rendering="crispEdges"/></g><path opacity="0.9" d="M60.5 45.1427C60.5 43.9215 59.7154 42.9607 58.7498 43.0012L48.7436 43.4179C47.8081 43.4585 47.0417 44.4424 47.0417 45.6173C47.0417 46.7922 47.8021 47.7124 48.7436 47.6661L54.7787 47.3883L46.7581 58.408L41.7127 53.6506C40.6626 52.6551 39.1357 52.8692 38.2063 54.1425L31.0185 63.3797C30.3124 64.2825 30.3305 65.6947 31.0547 66.4876C31.7427 67.24 32.8169 67.1532 33.4868 66.2966L40.1798 57.6961L45.213 62.4247C46.2269 63.3739 47.6814 63.1945 48.6048 62.008L57.1626 50.2474V57.8293C57.1626 58.9926 57.9109 59.8955 58.8343 59.8434C59.7577 59.7913 60.5 58.8074 60.5 57.6441V45.1427Z" fill="${baseWhiteFixed}"/><g opacity="0.77" filter="url(#filter2_d_428_51262)"><path d="M62.8679 28.2118C62.8679 21.2141 68.8312 15.7008 75.8075 16.2487L121.169 19.8113C127.413 20.3017 132.23 25.5115 132.23 31.7745V76.3878C132.23 82.5076 127.624 87.647 121.541 88.3159L76.1795 93.3036C69.0756 94.0847 62.8679 88.5222 62.8679 81.3755V28.2118Z" fill="${primaryAlt}"/></g><path opacity="0.18" d="M63.3679 28.2118C63.3679 21.5056 69.0827 16.2221 75.7683 16.7471L121.13 20.3098C127.114 20.7798 131.73 25.7724 131.73 31.7745V76.3878C131.73 82.2526 127.316 87.1779 121.487 87.8189L76.1248 92.8066C69.317 93.5552 63.3679 88.2244 63.3679 81.3755V28.2118Z" stroke="${baseWhiteFixed}"/><path opacity="0.9" fill-rule="evenodd" clip-rule="evenodd" d="M100.153 35.4414C93.4522 35.4513 88 41.5593 88 49.1475C88 57.2833 95.4854 68.4188 98.6955 72.8247C99.4497 73.8558 100.846 73.7917 101.585 72.6915C104.749 68.0142 112 56.4692 112 48.7626C112 41.0561 106.757 35.4266 100.153 35.4414ZM100.153 55.0976C97.0904 55.1667 94.665 52.5024 94.665 49.0439C94.665 45.5853 97.0854 42.8421 100.153 42.8125C103.195 42.7829 105.575 45.4471 105.575 48.8663C105.575 52.2854 103.195 55.0285 100.153 55.0976Z" fill="${baseWhiteFixed}"/><g opacity="0.8" filter="url(#filter3_d_428_51262)"><path d="M120.427 22.9794C120.427 15.9816 126.391 10.4683 133.367 11.0163L187.855 15.2957C194.099 15.7861 198.916 20.9958 198.916 27.2589V80.617C198.916 86.7368 194.311 91.8762 188.227 92.5451L133.739 98.5363C126.635 99.3174 120.427 93.7549 120.427 86.6082V22.9794Z" fill="${blue}"/></g><path opacity="0.64" d="M120.927 22.9794C120.927 16.2732 126.642 10.9896 133.328 11.5147L187.816 15.7942C193.8 16.2641 198.416 21.2568 198.416 27.2589V80.617C198.416 86.4818 194.002 91.4071 188.173 92.0481L133.684 98.0393C126.877 98.7879 120.927 93.4571 120.927 86.6082V22.9794Z" stroke="${blue}"/><g filter="url(#filter4_d_428_51262)"><path d="M156.392 33.0868C148.02 39.2013 150.946 55.7028 162.837 55.3445C173.483 55.0237 176.382 32.9743 162.643 31.008C160.229 30.8146 157.782 32.0715 156.392 33.0868Z" fill="${baseWhiteFixed}"/><path d="M181.036 74.8479C181.045 75.1366 180.812 75.3848 180.523 75.3935L142.521 76.7853C142.694 64.239 152.673 60.0046 161.659 59.7338C170.645 59.463 180.663 62.3181 181.036 74.8479Z" fill="${baseWhiteFixed}"/><path d="M180.523 75.3935L142.521 76.7853C142.517 77.0744 142.753 77.3084 143.042 77.2997L180.523 75.3935Z" fill="${baseWhiteFixed}"/></g><defs><filter id="filter0_d_428_51262" x="0" y="11.9609" width="87.3347" height="93.668" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="7"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.345098 0 0 0 0 0.85098 0 0 0 0 0.639216 0 0 0 0.34 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_428_51262"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_428_51262" result="shape"/></filter><filter id="filter1_d_428_51262" x="0" y="11.9609" width="87.3347" height="93.668" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="7"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_428_51262"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_428_51262" result="shape"/></filter><filter id="filter2_d_428_51262" x="48.8679" y="6.21094" width="97.3618" height="105.166" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="7"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.114518 0 0 0 0 0.523572 0 0 0 0 1 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_428_51262"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_428_51262" result="shape"/></filter><filter id="filter3_d_428_51262" x="106.427" y="0.978516" width="106.488" height="115.631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="7"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_428_51262"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_428_51262" result="shape"/></filter><filter id="filter4_d_428_51262" x="132.521" y="24.9883" width="58.516" height="66.3125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_428_51262"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_428_51262" result="shape"/></filter></defs></svg>`;

	module.exports = {
		disabledCheckInIcon,
		checkInAhaIcon,
		todayStatisticsDaySumIcon,
		todayStatisticsEmptyStateIcon,
	};
});