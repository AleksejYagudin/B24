/**
 * @module assets/common
 */
jn.define('assets/common', (require, exports, module) => {
	const AppTheme = require('apptheme');
	const dragButton = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2938 14.4008C11.4166 14.9768 10.3669 15.3119 9.23897 15.3119C6.16111 15.3119 3.66602 12.8168 3.66602 9.73897C3.66602 6.66111 6.16111 4.16602 9.23897 4.16602C12.3168 4.16602 14.8119 6.66111 14.8119 9.73897C14.8119 10.8669 14.4768 11.9166 13.9008 12.7938L16.7974 15.6904C17.1391 16.0321 17.1391 16.5862 16.7974 16.9279L16.4279 17.2974C16.0862 17.6391 15.5321 17.6391 15.1904 17.2974L12.2938 14.4008ZM13.2197 9.73897C13.2197 11.9374 11.4374 13.7197 9.23897 13.7197C7.0405 13.7197 5.25829 11.9374 5.25829 9.73897C5.25829 7.5405 7.0405 5.75829 9.23897 5.75829C11.4374 5.75829 13.2197 7.5405 13.2197 9.73897Z" fill="#A8ADB4"/></svg>';

	const magnifier = (color = AppTheme.colors.base4) => `<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.31573 10.6561C7.48022 11.2047 6.48055 11.5238 5.40633 11.5238C2.47504 11.5238 0.0987549 9.14756 0.0987549 6.21627C0.0987549 3.28497 2.47504 0.908691 5.40633 0.908691C8.33762 0.908691 10.7139 3.28497 10.7139 6.21627C10.7139 7.29048 10.3948 8.29016 9.84617 9.12567L12.6048 11.8843C12.9303 12.2098 12.9303 12.7374 12.6048 13.0628L12.2529 13.4148C11.9275 13.7402 11.3998 13.7402 11.0744 13.4148L8.31573 10.6561ZM9.19746 6.21627C9.19746 8.31005 7.50011 10.0074 5.40633 10.0074C3.31255 10.0074 1.61521 8.31005 1.61521 6.21627C1.61521 4.12249 3.31255 2.42514 5.40633 2.42514C7.50011 2.42514 9.19746 4.12249 9.19746 6.21627Z" fill="${color}"/></svg>`;

	const magnifierWithMenuAndDot = (
		magnifierColor = AppTheme.colors.base4,
		backgroundColor = null,
		dotColor = null,
	) => {
		let rect = '';
		let dot = '';
		let color = magnifierColor;
		let magnifierSvg = null;

		if (backgroundColor)
		{
			rect = `<rect y="0" width="31" height="31" rx="15.5" fill="${backgroundColor}"/>`;
			color = AppTheme.colors.base8;
		}
		else if (dotColor)
		{
			dot = `<circle cx="22" cy="9" r="3" fill="${dotColor}"/>`;
			magnifierSvg = `<path fill-rule="evenodd" clip-rule="evenodd" d="M22.8866 13.9536C22.5988 14.0048 22.3025 14.0315 22 14.0315C21.5937 14.0315 21.1986 13.9833 20.8201 13.8924C20.8413 14.1012 20.8521 14.313 20.8521 14.5274C20.8521 16.8848 19.5428 18.9363 17.6118 19.9946V22.2557C18.1599 22.0435 18.6798 21.7746 19.1644 21.4564L22.7394 25.0314C23.1299 25.4219 23.7631 25.4219 24.1536 25.0314L24.996 24.189C25.3865 23.7985 25.3865 23.1653 24.996 22.7748L21.4464 19.2252C22.3671 17.8902 22.9062 16.2718 22.9062 14.5274C22.9062 14.3346 22.8996 14.1432 22.8866 13.9536ZM17.4957 6.75529C16.6005 6.42416 15.6324 6.24329 14.622 6.24329C10.3072 6.24329 6.76285 9.5421 6.37341 13.7553H8.43934C8.81962 10.6788 11.4427 8.29734 14.622 8.29734C15.4543 8.29734 16.2485 8.46055 16.9743 8.7567C17.0084 8.04007 17.1924 7.3627 17.4957 6.75529ZM4 16.5C4 15.9477 4.44772 15.5 5 15.5H15C15.5523 15.5 16 15.9477 16 16.5C16 17.0523 15.5523 17.5 15 17.5H5C4.44772 17.5 4 17.0523 4 16.5ZM4 20.5C4 19.9477 4.44772 19.5 5 19.5H15C15.5523 19.5 16 19.9477 16 20.5C16 21.0523 15.5523 21.5 15 21.5H5C4.44772 21.5 4 21.0523 4 20.5ZM5 23.5C4.44772 23.5 4 23.9477 4 24.5C4 25.0523 4.44772 25.5 5 25.5H15C15.5523 25.5 16 25.0523 16 24.5C16 23.9477 15.5523 23.5 15 23.5H5Z" fill="${color}"/>`;
		}

		if (!magnifierSvg)
		{
			magnifierSvg = `<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6118 21.292C17.9359 21.1366 18.248 20.9601 18.5462 20.7642L21.9831 24.2011C22.3736 24.5916 23.0067 24.5916 23.3973 24.2011L24.1669 23.4315C24.5574 23.041 24.5574 22.4078 24.1669 22.0173L20.7545 18.605C21.6456 17.3131 22.1673 15.7469 22.1673 14.0588C22.1673 9.63117 18.578 6.04187 14.1504 6.04187C9.82439 6.04187 6.29868 9.46828 6.1391 13.7552H8.12876C8.28687 10.5665 10.9224 8.02967 14.1504 8.02967C17.4801 8.02967 20.1795 10.729 20.1795 14.0588C20.1795 16.1005 19.1646 17.9051 17.6118 18.9958Z" fill="${color}"/>`;
		}

		return '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">\n'
			+ `${rect}\n`
			+ `${dot}\n`
			+ `<rect x="4" y="15.5" width="12" height="2" rx="1" fill="${color}"/>\n`
			+ `<rect x="4" y="19.5" width="12" height="2" rx="1" fill="${color}"/>\n`
			+ `<rect x="4" y="23.5" width="12" height="2" rx="1" fill="${color}"/>\n`
			+ `${magnifierSvg}\n`
			+ '</svg>';
	};

	const plus = (color = AppTheme.colors.base2) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 5H9.16667V9.16667H5V10.8333H9.16667V15H10.8333V10.8333H15V9.16667H10.8333V5Z" fill="${color}"/></svg>`;

	const chevronRight = (color = AppTheme.colors.base6) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.16016 6.34368L12.6872 10.8707L13.8598 12.0001L12.6872 13.1301L8.16016 17.6572L9.75762 19.2547L17.0118 12.0005L9.75762 4.74634L8.16016 6.34368Z" fill="${color}"/></svg>`;
	const chevronLeft = ({ color = AppTheme.colors.base3 } = {}) => `<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3339 13.1303L15.8609 17.6573L14.2634 19.2547L7.00928 12.0005L14.2634 4.74634L15.8609 6.34381L11.3339 10.8709L10.1998 12.0001L11.3339 13.1303Z" fill="${color}"/></svg>`;
	const chevronDown = (color = AppTheme.colors.base4, params = {}) => {
		const { box } = params;

		if (box)
		{
			return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6676 8.15039L13.1405 12.6774L12 13.8003L10.8811 12.6774L6.35404 8.15039L4.75657 9.74786L12.0107 17.002L19.2649 9.74786L17.6676 8.15039Z" fill="${color}"/></svg>`;
		}

		return `<svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.09722 0.235352L4.02232 2.31025L3.49959 2.8249L2.98676 2.31025L0.91186 0.235352L0.179688 0.967524L3.50451 4.29235L6.82933 0.967524L6.09722 0.235352Z" fill="${color}"/></svg>`;
	};

	const chevronUp = (color = AppTheme.colors.base4, params = {}) => {
		const { box } = params;

		if (box)
		{
			return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.35393 15.8506L10.881 11.3235L12 10.1999L13.1404 11.3235L17.6674 15.8506L19.2649 14.2531L12.0108 6.99896L4.75659 14.2531L6.35393 15.8506Z" fill="${color}"/></svg>`;
		}

		return `<svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.732111 4.057L2.80701 1.9821L3.32974 1.46745L3.84257 1.9821L5.91747 4.057L6.64964 3.32483L3.32482 -4.76837e-07L9.53674e-07 3.32483L0.732111 4.057Z" fill="${color}"/></svg>`;
	};

	const arrowRight = (color = AppTheme.colors.base4) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1604 6.34343L14.6875 10.8705H5.00943V13.1299H14.6875L10.1604 17.6569L11.7579 19.2544L19.0121 12.0003L11.7579 4.74609L10.1604 6.34343Z" fill="${color}"/></svg>`;

	const smallCross = (color = AppTheme.colors.base3) => `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.05882 0.000222688L8 0.941373L0.941178 8L1.38837e-06 7.05885L7.05882 0.000222688Z" fill="#828B95"/><path d="M0 0.94115L0.941176 0L8 7.05863L7.05882 7.99978L0 0.94115Z" fill="${color}"/></svg>`;

	const cross = (color = AppTheme.colors.base6) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1412 11.6368L17.046 15.5417L15.5412 17.0465L11.6363 13.1417L7.73145 17.0465L6.22656 15.5417L10.1314 11.6368L6.22656 7.73193L7.73145 6.22705L11.6363 10.1319L15.5412 6.22705L17.046 7.73193L13.1412 11.6368Z" fill="${color}"/></svg>`;

	const bigCross = (color = AppTheme.colors.base6) => `<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6166 10.1138L10.114 11.6164L14.9976 16.5L10.114 21.3836L11.6166 22.8862L16.5002 18.0026L21.3835 22.8859L22.8861 21.3833L18.0028 16.5L22.8861 11.6167L21.3835 10.1141L16.5002 14.9974L11.6166 10.1138Z" fill="${color}"/></svg>`;

	const circledCross = (color = AppTheme.colors.base6) => `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.75329 0 0.5 4.25329 0.5 9.5C0.5 14.7467 4.75329 19 10 19C15.2467 19 19.5 14.7467 19.5 9.5C19.5 4.25329 15.2467 0 10 0ZM12.6871 5.46959C13.0581 5.09859 13.6596 5.09859 14.0306 5.46959C14.4016 5.84059 14.4016 6.44209 14.0306 6.81309L11.3435 9.5002L14.0304 12.1871C14.4014 12.5581 14.4014 13.1596 14.0304 13.5306C13.6594 13.9016 13.0579 13.9016 12.6869 13.5306L9.99999 10.8437L7.31309 13.5306C6.94209 13.9016 6.34058 13.9016 5.96958 13.5306C5.59859 13.1596 5.59859 12.5581 5.96958 12.1871L8.65649 9.5002L5.96939 6.8131C5.5984 6.4421 5.5984 5.84059 5.96939 5.4696C6.34039 5.0986 6.9419 5.0986 7.3129 5.4696L9.99999 8.15669L12.6871 5.46959Z" fill="${color}"/></svg>`;

	const info = (color = AppTheme.colors.base2) => `<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.53727 4.05959L0.795898 4.06V4.8442H1.6189V8.17227H0.795898V8.99527H4.08791V8.17227H3.53727V4.05959ZM2.44191 2.75671C3.08126 2.75671 3.59956 2.23841 3.59956 1.59906C3.59956 0.959705 3.08126 0.441406 2.44191 0.441406C1.80255 0.441406 1.28425 0.959705 1.28425 1.59906C1.28425 2.23841 1.80255 2.75671 2.44191 2.75671Z" fill="${color}"/></svg>`;

	const pen = ({ color = AppTheme.colors.base3 } = {}) => `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4359 0.0348206L13.9865 2.61224L4.00879 12.5631L1.45822 9.98563L11.4359 0.0348206ZM0.0256074 13.6726C0.00148857 13.7639 0.0273302 13.8604 0.0927957 13.9275C0.159984 13.9947 0.256459 14.0205 0.347766 13.9947L3.19896 13.2266L0.793965 10.8223L0.0256074 13.6726Z" fill="${color}"/></svg>`;

	const largePen = (color = AppTheme.colors.base4) => `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4358 5.53516L18.9863 8.11258L9.00867 18.0634L6.4581 15.486L16.4358 5.53516ZM5.02549 19.173C5.00137 19.2643 5.02721 19.3607 5.09267 19.4279C5.15986 19.495 5.25634 19.5209 5.34764 19.495L8.19884 18.7269L5.79384 16.3227L5.02549 19.173Z" fill="${color}"/></svg>`;

	const lock = '<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M14.17 18.4443V20.3019H12.6987V18.4443C12.4339 18.2285 12.2644 17.8989 12.2644 17.5293C12.2644 16.8792 12.7882 16.3522 13.4344 16.3522C14.0804 16.3522 14.6043 16.8792 14.6043 17.5293C14.6043 17.8989 14.4348 18.2285 14.17 18.4443ZM10.2313 10.8976C10.2313 9.11768 11.6653 7.67481 13.4343 7.67481C15.2033 7.67481 16.6374 9.11768 16.6374 10.8976V13.6219H10.2313V10.8976ZM18.3301 13.6219V10.8976C18.3301 8.17704 16.1382 5.97168 13.4343 5.97168C10.7305 5.97168 8.53854 8.17704 8.53854 10.8976V13.6219H7.05225V22.9508H19.8164V13.6219H18.3301Z" fill="#2FC6F6"/></g></svg>';

	const clip = '<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1313 7.48636C16.2696 7.62472 16.2696 7.84904 16.1313 7.98739L15.2028 8.91584C15.0645 9.05419 14.8401 9.05419 14.7018 8.91584L9.2344 3.44845C7.66198 1.87603 5.08893 1.87603 3.5165 3.44845C1.94408 5.02087 1.94408 7.59393 3.5165 9.16635L10.2236 15.8735C11.2097 16.8596 12.8112 16.8596 13.7973 15.8735C14.7834 14.8874 14.7834 13.2859 13.7973 12.2998L7.80493 6.3074C7.40456 5.90703 6.77582 5.90703 6.37545 6.3074C5.97509 6.70777 5.97509 7.33651 6.37545 7.73688L11.1281 12.4895C11.2665 12.6279 11.2665 12.8522 11.1281 12.9906L10.1997 13.919C10.0613 14.0574 9.83698 14.0574 9.69863 13.919L4.94598 9.16635C3.7594 7.97977 3.7594 6.0645 4.94598 4.87793C6.13256 3.69135 8.04783 3.69135 9.2344 4.87793L15.2268 10.8703C16.9991 12.6426 16.9991 15.5307 15.2268 17.303C13.4545 19.0752 10.5664 19.0752 8.79416 17.303L2.08703 10.5958C-0.271604 8.23719 -0.271604 4.37761 2.08703 2.01898C4.44566 -0.339659 8.30525 -0.339659 10.6639 2.01898L16.1313 7.48636Z" fill="#828B95"/></svg>';

	const clipOutline = (color = AppTheme.colors.base3) => `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.94469 8.29673C9.75582 6.48562 12.3094 6.86464 13.3696 7.89631C14.0203 8.52939 14.8534 9.36831 15.6914 10.2134C15.7437 10.2662 15.7961 10.319 15.8485 10.3718C16.6313 11.1614 17.4081 11.9448 18.024 12.5489C18.2803 12.8003 18.6919 12.7963 18.9432 12.54C19.1946 12.2837 19.1906 11.8721 18.9343 11.6208C18.3251 11.0233 17.5545 10.2462 16.769 9.45387C16.7176 9.40197 16.666 9.35001 16.6145 9.29802C15.7787 8.45512 14.9368 7.60738 14.2762 6.96458C12.714 5.4445 9.34686 5.0561 7.02546 7.37749C4.70842 9.69452 5.10232 12.9844 6.5934 14.4755C7.5699 15.452 10.6087 18.3973 12.2049 19.9445C12.6329 20.3593 12.9572 20.6736 13.1102 20.8224C13.6163 21.3149 14.543 21.6721 15.4763 21.7521C16.4297 21.8338 17.5563 21.6402 18.3967 20.8224C19.9673 19.2942 19.8847 16.9041 18.5867 15.6411C18.0745 15.1428 16.5699 13.6803 15.148 12.2982C14.7876 11.948 14.4326 11.603 14.1004 11.2801C13.1215 10.3286 12.3405 9.56958 12.2048 9.43752C11.9193 9.15978 11.4385 8.90663 10.8995 8.83712C10.3313 8.76385 9.66676 8.89321 9.10736 9.43752C8.55709 9.97294 8.3864 10.6356 8.40027 11.1926C8.40715 11.4688 8.459 11.7283 8.53765 11.9499C8.6117 12.1585 8.72763 12.3842 8.89879 12.5507C9.18675 12.8309 12.9929 16.6219 13.3633 16.9923C13.6171 17.2461 14.0287 17.2461 14.2825 16.9923C14.5364 16.7384 14.5364 16.3269 14.2825 16.0731C13.9188 15.7093 10.1729 11.9782 9.81467 11.628C9.81467 11.628 9.79091 11.5943 9.76275 11.515C9.72946 11.4212 9.70329 11.2975 9.69987 11.1602C9.69314 10.89 9.77272 10.604 10.0139 10.3692C10.2461 10.1434 10.4949 10.0957 10.7333 10.1264C11.0008 10.161 11.2197 10.2929 11.2982 10.3692C11.4341 10.5015 12.2143 11.2598 13.1923 12.2103C13.5251 12.5338 13.8809 12.8796 14.2419 13.2305C15.664 14.6126 17.1683 16.0749 17.6801 16.5728C18.4298 17.3024 18.5602 18.8495 17.4901 19.8907C17.0102 20.3577 16.3115 20.5189 15.5873 20.4568C14.843 20.393 14.2399 20.1078 14.0168 19.8907C13.8602 19.7384 13.5308 19.4191 13.0975 18.9991C11.4975 17.4483 8.48053 14.5241 7.51264 13.5562C6.53536 12.579 6.1292 10.1122 7.94469 8.29673Z" fill="${color}"/></svg>`;

	const location = (color = AppTheme.colors.accentMainPrimary) => `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7778 1.5C7.57426 1.5 5 4.03472 5 7.19126C5 10.523 8.43279 15.1735 10.0064 17.1303C10.405 17.626 11.1466 17.6225 11.5417 17.124C13.1119 15.1428 16.5556 10.4287 16.5556 7.19126C16.5556 4.03472 13.9813 1.5 10.7778 1.5ZM10.7778 9.77738C9.30749 9.77738 8.15133 8.63953 8.15133 7.19027C8.15133 5.742 9.30648 4.60315 10.7778 4.60315C12.2481 4.60315 13.4042 5.741 13.4042 7.19027C13.4042 8.6395 12.2481 9.77738 10.7778 9.77738Z" fill="${color}"/> </svg>`;

	const dateTime = (color = AppTheme.colors.base6) => `<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3227 12.4507H15.6018C15.8595 12.4507 16.0683 12.6596 16.0683 12.9172V14.1964C16.0683 14.454 15.8595 14.6629 15.6018 14.6629H14.3227C14.065 14.6629 13.8562 14.454 13.8562 14.1964V12.9172C13.8562 12.6596 14.065 12.4507 14.3227 12.4507Z" fill="${color}"/><path d="M12.2846 12.451H11.0054C10.7478 12.451 10.5389 12.6598 10.5389 12.9175V14.1966C10.5389 14.4543 10.7478 14.6631 11.0054 14.6631H12.2846C12.5422 14.6631 12.7511 14.4543 12.7511 14.1966V12.9175C12.7511 12.6598 12.5422 12.451 12.2846 12.451Z" fill="${color}"/><path d="M12.2835 15.769H11.0044C10.7467 15.769 10.5379 15.9778 10.5379 16.2355V17.5146C10.5379 17.7723 10.7467 17.9811 11.0044 17.9811H12.2835C12.5412 17.9811 12.75 17.7723 12.75 17.5146V16.2355C12.75 15.9778 12.5412 15.769 12.2835 15.769Z" fill="${color}"/><path d="M15.6018 15.769H14.3227C14.065 15.769 13.8562 15.9778 13.8562 16.2355V17.5146C13.8562 17.7723 14.065 17.9811 14.3227 17.9811H15.6018C15.8595 17.9811 16.0683 17.7723 16.0683 17.5146V16.2355C16.0683 15.9778 15.8595 15.769 15.6018 15.769Z" fill="${color}"/><path d="M17.641 12.4507H18.9201C19.1778 12.4507 19.3866 12.6596 19.3866 12.9172V14.1964C19.3866 14.454 19.1778 14.6629 18.9201 14.6629H17.641C17.3833 14.6629 17.1745 14.454 17.1745 14.1964V12.9172C17.1745 12.6596 17.3833 12.4507 17.641 12.4507Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1998 7.15009V6.54042H21.5469C22.777 6.61846 23.73 7.6927 23.7078 8.97911V21.1725C23.7078 21.8456 23.1851 22.3919 22.5385 22.3919H7.27411C6.62865 22.3919 6.1048 21.8456 6.1048 21.1725V8.97911C6.10012 8.9157 6.09778 8.85351 6.09778 8.79133C6.10012 7.54516 7.07065 6.53798 8.26569 6.54042H9.61275V7.15009C9.61275 8.15971 10.3974 8.97911 11.3667 8.97911C12.3361 8.97911 13.1207 8.15971 13.1207 7.15009V6.54042H16.6919V7.15009C16.6919 8.15971 17.4777 8.97911 18.4459 8.97911C19.4141 8.97911 20.1998 8.15971 20.1998 7.15009ZM21.3692 19.9532H8.44346V10.2676H21.3692V19.9532Z" fill="${color}"/><path d="M12.2261 5.56737V6.90865C12.2261 7.4037 11.8413 7.80486 11.3666 7.80486C10.8919 7.80486 10.5072 7.4037 10.5072 6.90865V5.56737L10.5135 5.45093C10.5654 5.00643 10.9316 4.6628 11.3725 4.66505C11.8472 4.66872 12.2284 5.07232 12.2261 5.56737Z" fill="${color}"/><path d="M19.2574 5.60027V6.87204C19.2574 7.33905 18.8938 7.71826 18.4448 7.71826C17.9957 7.71704 17.6344 7.33783 17.6344 6.87082V5.60027C17.6344 5.13204 17.9981 4.75404 18.4459 4.75404C18.8938 4.75404 19.2574 5.13204 19.2574 5.60027Z" fill="${color}"/></svg>`;

	const dateTimeOutline = (color = AppTheme.colors.base3) => `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8626 2.98672H3.1376C2.37821 2.98672 1.7626 3.60233 1.7626 4.36172V12.8389C1.7626 13.5983 2.37821 14.2139 3.1376 14.2139H12.8626C13.622 14.2139 14.2376 13.5983 14.2376 12.8389V4.36172C14.2376 3.60233 13.622 2.98672 12.8626 2.98672ZM3.1376 1.88672C1.77069 1.88672 0.662598 2.99482 0.662598 4.36172V12.8389C0.662598 14.2058 1.77069 15.3139 3.1376 15.3139H12.8626C14.2295 15.3139 15.3376 14.2058 15.3376 12.8389V4.36172C15.3376 2.99481 14.2295 1.88672 12.8626 1.88672H3.1376Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.84791 0.576172C4.43614 0.576172 4.10234 0.909977 4.10234 1.32175V4.05128C4.10234 4.46305 4.43614 4.79686 4.84791 4.79686C5.25968 4.79686 5.59349 4.46305 5.59349 4.05128V1.32175C5.59349 0.909977 5.25968 0.576172 4.84791 0.576172Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1625 0.576172C10.7508 0.576172 10.417 0.909977 10.417 1.32175V4.05128C10.417 4.46305 10.7508 4.79686 11.1625 4.79686C11.5743 4.79686 11.9081 4.46305 11.9081 4.05128V1.32175C11.9081 0.909977 11.5743 0.576172 11.1625 0.576172Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9063 6.10591C10.5013 6.10591 10.173 6.43423 10.173 6.83924V7.61484C10.173 8.01985 10.5013 8.34817 10.9063 8.34817H11.6471C12.0521 8.34817 12.3804 8.01985 12.3804 7.61484V6.83924C12.3804 6.43423 12.0521 6.10591 11.6471 6.10591H10.9063Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.6828 6.10591C7.27779 6.10591 6.94946 6.43423 6.94946 6.83924V7.61484C6.94946 8.01985 7.27779 8.34817 7.6828 8.34817H8.42356C8.82857 8.34817 9.15689 8.01985 9.15689 7.61484V6.83924C9.15689 6.43423 8.82857 6.10591 8.42356 6.10591H7.6828Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3093 6.10591C3.90429 6.10591 3.57597 6.43423 3.57597 6.83924V7.61484C3.57597 8.01985 3.90429 8.34817 4.3093 8.34817H5.05006C5.45507 8.34817 5.7834 8.01985 5.7834 7.61484V6.83924C5.7834 6.43423 5.45507 6.10591 5.05006 6.10591H4.3093Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3093 9.58996C3.90429 9.58996 3.57597 9.91828 3.57597 10.3233V11.0989C3.57597 11.5039 3.90429 11.8322 4.3093 11.8322H5.05006C5.45507 11.8322 5.7834 11.5039 5.7834 11.0989V10.3233C5.7834 9.91828 5.45507 9.58996 5.05006 9.58996H4.3093Z" fill="${color}"/></svg>`;

	const clock = (color = AppTheme.colors.base6) => `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5547 11.104H13.7966V16.2503H18.7248V14.5893H15.5547V11.104ZM21.8878 4.48683C21.6904 4.4083 21.4765 4.3711 21.2704 4.31427H20.8255C20.7966 4.3246 20.7687 4.3401 20.7393 4.34372C20.0366 4.43103 19.4394 4.74825 18.8979 5.18688C18.8669 5.21168 18.8432 5.24578 18.8091 5.28246C20.2071 6.48005 21.5938 7.66782 23.0264 8.89485C23.184 8.51873 23.3602 8.17878 23.4713 7.81868C24.021 6.03625 22.9448 4.90945 21.8878 4.48683ZM11.4386 5.64463C11.1198 5.24785 10.5298 4.83763 10.0189 4.62839C8.40795 3.96915 6.83684 5.17087 6.55475 6.3483C6.5222 6.48521 6.49172 6.62264 6.4602 6.75955V7.35215C6.47312 7.41208 6.48862 7.47097 6.49843 7.53142C6.56921 7.95559 6.68391 8.36529 6.89367 8.75897C8.41932 7.7138 9.92844 6.67947 11.4386 5.64463ZM15.0287 21.6393C11.4658 21.6486 8.53417 18.7399 8.52587 15.1863C8.51756 11.5799 11.4145 8.6605 15.0092 8.65318C18.5833 8.64585 21.5022 11.5516 21.512 15.1262C21.5218 18.7131 18.618 21.63 15.0287 21.6393ZM21.1851 9.15214C17.8181 5.72265 12.3603 5.67098 8.94268 9.02039C5.26727 12.6224 5.52559 18.8098 9.68975 22.0073C9.36582 22.5705 9.04033 23.1357 8.70193 23.7226C9.13229 23.985 9.55801 24.2439 9.98321 24.5032H10.0685C10.3784 23.9535 10.6884 23.4038 11.0082 22.836C12.2601 23.4839 13.5796 23.8073 14.9714 23.812C16.3664 23.8166 17.6895 23.5009 18.9646 22.85C19.2777 23.4074 19.5851 23.9556 19.8925 24.5032H19.9777C20.3295 24.2914 20.6809 24.0801 21.0327 23.8693C21.105 23.8259 21.1774 23.7835 21.2667 23.7308C20.9335 23.1517 20.6085 22.5875 20.2851 22.0249C24.4431 18.8212 24.7174 12.7501 21.1851 9.15214Z" fill="${color}"/></svg>`;

	const clockOutline = (color = AppTheme.colors.base3) => `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.92239 11.0131C4.92239 7.56287 7.71934 4.76594 11.1696 4.76594C14.6198 4.76594 17.4167 7.56287 17.4167 11.0131C17.4167 14.4633 14.6198 17.2603 11.1696 17.2603C7.71934 17.2603 4.92239 14.4633 4.92239 11.0131ZM11.1696 5.86594C8.32685 5.86594 6.02239 8.1704 6.02239 11.0131C6.02239 13.8558 8.32686 16.1603 11.1696 16.1603C14.0122 16.1603 16.3167 13.8558 16.3167 11.0131C16.3167 8.1704 14.0122 5.86594 11.1696 5.86594Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9275 7.33449C11.2313 7.33449 11.4775 7.58073 11.4775 7.88449V10.5492L13.6327 10.5492C13.9365 10.5492 14.1827 10.7954 14.1827 11.0992C14.1827 11.403 13.9365 11.6492 13.6327 11.6492L10.9275 11.6492C10.7817 11.6492 10.6418 11.5913 10.5386 11.4881C10.4355 11.385 10.3775 11.2451 10.3775 11.0992V7.88449C10.3775 7.58073 10.6238 7.33449 10.9275 7.33449Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1772 15.8466C14.392 15.6318 14.7403 15.6318 14.9551 15.8466L16.3793 17.2709C16.5941 17.4857 16.5941 17.8339 16.3793 18.0487C16.1646 18.2635 15.8163 18.2635 15.6015 18.0487L14.1772 16.6244C13.9625 16.4096 13.9625 16.0614 14.1772 15.8466Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.16186 15.8466C8.37665 16.0614 8.37665 16.4096 8.16186 16.6244L6.73757 18.0487C6.52279 18.2635 6.17454 18.2635 5.95976 18.0487C5.74497 17.8339 5.74497 17.4857 5.95976 17.2709L7.38405 15.8466C7.59883 15.6318 7.94708 15.6318 8.16186 15.8466Z" fill="${color}"/><path d="M7.37658 4.09538C7.22914 3.81262 6.87907 3.70116 6.60774 3.8687C5.73199 4.40944 4.96927 5.1149 4.36197 5.94588C4.17381 6.20334 4.25767 6.56103 4.52809 6.73004C4.7985 6.89906 5.15282 6.81512 5.34414 6.55999C5.8383 5.90098 6.44801 5.33704 7.14349 4.8957C7.41275 4.72484 7.52403 4.37813 7.37658 4.09538Z" fill="${color}"/><path d="M14.9621 4.09538C15.1095 3.81262 15.4596 3.70116 15.7309 3.8687C16.6128 4.41326 17.3801 5.12483 17.9894 5.96332C18.1768 6.22129 18.092 6.57875 17.8211 6.74703C17.5503 6.91531 17.1962 6.83041 17.0056 6.57477C16.5095 5.90945 15.8959 5.34036 15.1951 4.8957C14.9259 4.72484 14.8146 4.37813 14.9621 4.09538Z" fill="${color}"/></svg>`;

	const moreWithDot = (color = AppTheme.colors.base4, backgroundColor = null, dotColor = null) => {
		const isIos = (Application.getPlatform() === 'ios');
		const iconSize = (isIos ? 24 : 78);
		let backgroundCircle = '';
		let moreColor = color;

		if (backgroundColor)
		{
			const circleSize = iconSize / 2;
			backgroundCircle = `<circle cx="${circleSize}" cy="${circleSize}" r="${circleSize}" fill="${backgroundColor}"/>`;
			moreColor = AppTheme.colors.base8;
		}

		let dot = '';
		if (dotColor)
		{
			const dotSize = iconSize / 8;
			dot = `<circle cx="${iconSize - dotSize}" cy="${dotSize}" r="${dotSize}" fill="${dotColor}"/>`;
		}

		return (
			isIos
				? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">${backgroundCircle}<path fill-rule="evenodd" clip-rule="evenodd" d="M7.12033 12.0002C7.12033 13.2024 6.14568 14.1771 4.9434 14.1771C3.74112 14.1771 2.76648 13.2024 2.76648 12.0002C2.76648 10.7979 3.74112 9.82324 4.9434 9.82324C6.14568 9.82324 7.12033 10.7979 7.12033 12.0002ZM14.1769 12.0002C14.1769 13.2024 13.2023 14.1771 12 14.1771C10.7977 14.1771 9.82308 13.2024 9.82308 12.0002C9.82308 10.7979 10.7977 9.82324 12 9.82324C13.2023 9.82324 14.1769 10.7979 14.1769 12.0002ZM19.0566 14.1771C20.2589 14.1771 21.2335 13.2024 21.2335 12.0002C21.2335 10.7979 20.2589 9.82324 19.0566 9.82324C17.8543 9.82324 16.8797 10.7979 16.8797 12.0002C16.8797 13.2024 17.8543 14.1771 19.0566 14.1771Z" fill="${moreColor}"/>${dot}</svg>`
				: `<svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">${backgroundCircle}<path fill-rule="evenodd" clip-rule="evenodd" d="M26 39C26 42.5899 23.0899 45.5 19.5 45.5C15.9101 45.5 13 42.5899 13 39C13 35.4101 15.9101 32.5 19.5 32.5C23.0899 32.5 26 35.4101 26 39ZM45.5 39C45.5 42.5899 42.5899 45.5 39 45.5C35.4101 45.5 32.5 42.5899 32.5 39C32.5 35.4101 35.4101 32.5 39 32.5C42.5899 32.5 45.5 35.4101 45.5 39ZM58.5 45.5C62.0899 45.5 65 42.5899 65 39C65 35.4101 62.0899 32.5 58.5 32.5C54.9101 32.5 52 35.4101 52 39C52 42.5899 54.9101 45.5 58.5 45.5Z" fill="${moreColor}"/>${dot}</svg>`
		);
	};

	const dots = () => '<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.99935 5.33317C4.28801 5.33317 5.33268 4.2885 5.33268 2.99984C5.33268 1.71117 4.28801 0.666504 2.99935 0.666504C1.71068 0.666504 0.666016 1.71117 0.666016 2.99984C0.666016 4.2885 1.71068 5.33317 2.99935 5.33317Z" fill="#828B95"/><path d="M9.99935 5.33317C11.288 5.33317 12.3327 4.2885 12.3327 2.99984C12.3327 1.71117 11.288 0.666504 9.99935 0.666504C8.71068 0.666504 7.66601 1.71117 7.66601 2.99984C7.66601 4.2885 8.71068 5.33317 9.99935 5.33317Z" fill="#828B95"/><path d="M19.3327 2.99984C19.3327 4.2885 18.288 5.33317 16.9993 5.33317C15.7107 5.33317 14.666 4.2885 14.666 2.99984C14.666 1.71117 15.7107 0.666504 16.9993 0.666504C18.288 0.666504 19.3327 1.71117 19.3327 2.99984Z" fill="#828B95"/></svg>';
	const copy = () => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.77089 5.79683H15.7537C16.8582 5.79683 17.7537 6.69226 17.7537 7.79683V16.0345H17.9674C19.072 16.0345 19.9674 15.1391 19.9674 14.0345V6.04102C19.9674 4.93645 19.072 4.04102 17.9675 4.04102H9.75616C8.73326 4.04102 7.89114 4.80851 7.77089 5.79683Z" fill="${AppTheme.colors.base3}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.02295 9.95065C4.02295 8.84608 4.91838 7.95065 6.02295 7.95065H14.0283C15.1329 7.95065 16.0283 8.84608 16.0283 9.95065V17.956C16.0283 19.0606 15.1329 19.956 14.0283 19.956H6.02295C4.91838 19.956 4.02295 19.0606 4.02295 17.956V9.95065ZM13.9505 10.0287H6.10085V17.8784H13.9505V10.0287Z" fill="${AppTheme.colors.base3}"/></svg>`;

	const settings = ({ color = '#525c69' } = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.663 18.3123C13.706 18.1484 13.8335 18.0212 13.9948 17.9689C14.2806 17.8762 14.5572 17.7634 14.8231 17.632C14.9729 17.5579 15.1503 17.5589 15.2947 17.6432L16.2456 18.1985C16.4064 18.2925 16.6082 18.2848 16.7559 18.1714C17.2875 17.7634 17.7638 17.2871 18.1718 16.7555C18.2852 16.6078 18.2928 16.4061 18.1989 16.2452L17.6435 15.2942C17.5592 15.1499 17.5582 14.9725 17.6323 14.8226C17.7637 14.5568 17.8765 14.2802 17.9692 13.9944C18.0214 13.8332 18.1487 13.7057 18.3126 13.6626L19.3566 13.3884C19.5381 13.3407 19.6759 13.1908 19.6993 13.0045C19.7859 12.3153 19.7819 11.6409 19.6976 10.9916C19.6736 10.8065 19.5362 10.6581 19.3557 10.6107L18.2997 10.3333C18.1375 10.2907 18.0111 10.1654 17.9579 10.0063C17.8645 9.72736 17.7521 9.4571 17.6222 9.1971C17.5472 9.047 17.5479 8.86885 17.6325 8.72395L18.1828 7.78159C18.2769 7.62046 18.2691 7.41837 18.1553 7.2705C17.7437 6.73567 17.264 6.25597 16.7291 5.84439C16.5813 5.7306 16.3792 5.72276 16.2181 5.81686L15.2758 6.36714C15.1309 6.45176 14.9527 6.45246 14.8026 6.37746C14.5426 6.24754 14.2723 6.13513 13.9933 6.04177C13.8343 5.98856 13.709 5.86215 13.6664 5.69997L13.3891 4.64409C13.3416 4.46359 13.1932 4.32621 13.0081 4.30219C12.3588 4.21794 11.6843 4.21398 10.9951 4.30062C10.8088 4.32403 10.6589 4.46178 10.6112 4.64334L10.3342 5.69803C10.2921 5.85848 10.1688 5.9838 10.0126 6.03973C9.7514 6.13328 9.49248 6.24991 9.23898 6.38647C9.08649 6.46863 8.90193 6.47088 8.75236 6.38353L7.85689 5.86059C7.69248 5.76458 7.48592 5.77501 7.33716 5.89383C6.80687 6.31736 6.31774 6.80651 5.89421 7.3368C5.7754 7.48557 5.76497 7.69212 5.86098 7.85653L6.38389 8.75194C6.47124 8.90152 6.46899 9.08608 6.38683 9.23857C6.25024 9.49209 6.13359 9.75103 6.04003 10.0123C5.98409 10.1684 5.85877 10.2917 5.69833 10.3339L4.6438 10.6108C4.46223 10.6585 4.32448 10.8084 4.30107 10.9947C4.21446 11.684 4.21844 12.3584 4.30271 13.0078C4.32673 13.1928 4.46411 13.3413 4.64461 13.3887L5.70022 13.666C5.8624 13.7085 5.98882 13.8339 6.04203 13.9929C6.13539 14.272 6.24783 14.5423 6.37777 14.8024C6.45277 14.9525 6.45207 15.1306 6.36745 15.2755L5.81733 16.2175C5.72324 16.3787 5.73107 16.5807 5.84486 16.7286C6.25645 17.2635 6.73617 17.7432 7.27102 18.1548C7.4189 18.2686 7.62099 18.2765 7.78212 18.1824L8.72419 17.6322C8.86909 17.5476 9.04724 17.5469 9.19734 17.6219C9.4574 17.7518 9.72772 17.8643 10.0068 17.9576C10.1658 18.0108 10.2911 18.1372 10.3337 18.2994L10.611 19.3552C10.6584 19.5357 10.8069 19.6731 10.992 19.6971C11.6412 19.7814 12.3156 19.7854 13.0049 19.6988C13.1912 19.6754 13.3411 19.5377 13.3888 19.3561L13.663 18.3123ZM12.7748 15.4498C10.2235 15.9924 8.00717 13.7754 8.54987 11.2247C8.80651 10.0185 10.0186 8.80639 11.2247 8.5497C13.7755 8.00678 15.9927 10.2232 15.45 12.7747C15.1653 14.1128 14.1129 15.1652 12.7748 15.4498Z" fill="${color}"/></svg>`;

	const erase = () => '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 14C23 18.9706 18.9706 23 14 23C9.02944 23 5 18.9706 5 14C5 9.02944 9.02944 5 14 5C18.9706 5 23 9.02944 23 14ZM15.433 14.0006L18.2986 16.8663L16.8658 18.2991L14.0002 15.4335L11.1345 18.2991L9.70169 16.8663L12.5673 14.0006L9.70169 11.135L11.1345 9.70218L14.0002 12.5678L16.8658 9.70218L18.2986 11.135L15.433 14.0006Z" fill="#D0D0D0"/></svg>';

	const settingsOutline = (color = AppTheme.colors.base3) => `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.11941 0.75952C8.72145 0.697217 9.31317 0.699622 9.88819 0.760992C10.4965 0.825919 10.9559 1.26925 11.1148 1.80848L11.2626 2.30969C11.2963 2.42414 11.3946 2.53718 11.5517 2.59988C11.6083 2.62249 11.6646 2.64584 11.7205 2.6699C11.8758 2.73678 12.0254 2.72643 12.1302 2.66931L12.5885 2.41971C13.0821 2.15082 13.7202 2.16221 14.1962 2.54597C14.6589 2.91894 15.0807 3.34063 15.4537 3.80327C15.8376 4.27934 15.849 4.91748 15.5801 5.41118L15.3306 5.8693C15.2734 5.97417 15.2631 6.12372 15.33 6.27908C15.3541 6.33506 15.3775 6.39143 15.4002 6.44817C15.4629 6.60523 15.5759 6.70354 15.6903 6.73727L16.1919 6.8851C16.7311 7.04403 17.1744 7.50335 17.2394 8.11165C17.3008 8.68648 17.3032 9.27801 17.2411 9.87987C17.178 10.4905 16.7346 10.955 16.191 11.1152L15.7082 11.2575C15.5926 11.2916 15.4783 11.3917 15.416 11.5517C15.3913 11.6151 15.3657 11.6779 15.3392 11.7403C15.2731 11.8959 15.2838 12.0449 15.3406 12.1492L15.5959 12.6179C15.8643 13.1105 15.8538 13.7477 15.4707 14.2237C15.1011 14.683 14.6828 15.1013 14.2236 15.4709C13.7476 15.8541 13.1103 15.8646 12.6177 15.5962L12.1493 15.3411C12.045 15.2843 11.8959 15.2736 11.7403 15.3397C11.6778 15.3663 11.6148 15.3919 11.5513 15.4167C11.3913 15.479 11.2912 15.5933 11.2571 15.7089L11.1149 16.1914C10.9546 16.735 10.4902 17.1784 9.87958 17.2415C9.27777 17.3037 8.68631 17.3013 8.11154 17.2399C7.5032 17.175 7.04386 16.7316 6.88492 16.1924L6.73728 15.6915C6.70355 15.5771 6.60521 15.464 6.44813 15.4013C6.39103 15.3785 6.33432 15.355 6.27799 15.3307C6.12262 15.2638 5.97306 15.2742 5.86818 15.3313L5.41063 15.5805C4.91691 15.8495 4.27876 15.838 3.80269 15.4541C3.34012 15.0811 2.91849 14.6594 2.54556 14.1968C2.16179 13.7207 2.1504 13.0827 2.41929 12.589L2.6686 12.1313C2.72572 12.0265 2.73606 11.8769 2.66917 11.7216C2.64496 11.6653 2.62148 11.6087 2.59873 11.5517C2.53604 11.3946 2.42299 11.2963 2.30853 11.2626L1.80797 11.115C1.26872 10.9561 0.825384 10.4967 0.760475 9.88832C0.699132 9.31336 0.696738 8.72171 0.759034 8.11974C0.822214 7.50922 1.26556 7.04487 1.80909 6.88467L2.31506 6.73554C2.42699 6.70255 2.54117 6.60598 2.61007 6.44717C2.6299 6.40144 2.65033 6.35587 2.67132 6.31047C2.74575 6.14954 2.73674 5.99378 2.67801 5.88596L2.4638 5.4927C2.18826 4.98684 2.21014 4.33608 2.60699 3.85936C2.98412 3.4063 3.40609 2.98434 3.85916 2.60722C4.33589 2.21041 4.98662 2.18853 5.49246 2.46407L5.886 2.67843C5.99381 2.73715 6.14954 2.74617 6.31047 2.67178C6.35572 2.65086 6.40115 2.6305 6.44674 2.61073C6.60559 2.54184 6.70217 2.42763 6.73517 2.3157L6.88435 1.80957C7.04455 1.26604 7.50889 0.822701 8.11941 0.75952ZM9.76744 1.89235C9.27142 1.83941 8.75943 1.83715 8.23654 1.89126C8.13096 1.90219 8.01905 1.98422 7.97571 2.13125L7.82653 2.63738C7.68281 3.12499 7.31402 3.47478 6.89943 3.65458C6.86224 3.67071 6.82506 3.68737 6.78792 3.70454C6.35136 3.90636 5.812 3.93375 5.34175 3.6776L4.94821 3.46324C4.81235 3.38924 4.67196 3.41104 4.58706 3.48171C4.1872 3.81454 3.81429 4.18744 3.48145 4.58728C3.41078 4.67218 3.38897 4.81258 3.46297 4.94845L3.67719 5.34171C3.93337 5.81203 3.90594 6.35148 3.70401 6.78809C3.68678 6.82535 3.67006 6.86264 3.65388 6.89996C3.47406 7.31449 3.12429 7.6832 2.63674 7.8269L2.13077 7.97604C1.98374 8.01937 1.9017 8.13129 1.89078 8.23686C1.83667 8.7597 1.83893 9.27164 1.89184 9.76761C1.90278 9.87013 1.98315 9.98047 2.12965 10.0237L2.63021 10.1712C3.12575 10.3173 3.48246 10.6965 3.65548 11.13C3.67444 11.1775 3.69403 11.2247 3.71422 11.2716C3.89899 11.7008 3.91506 12.2216 3.66777 12.6756L3.41846 13.1333C3.34545 13.2673 3.36654 13.4023 3.43137 13.4827C3.75338 13.8822 4.11749 14.2463 4.5169 14.5684C4.59732 14.6333 4.7323 14.6544 4.86637 14.5814L5.32393 14.3321C5.77797 14.0848 6.29883 14.1009 6.72802 14.2857C6.77499 14.306 6.82229 14.3256 6.86989 14.3446C7.30342 14.5176 7.6826 14.8743 7.82865 15.3698L7.97629 15.8707C8.01947 16.0172 8.1298 16.0976 8.23231 16.1085C8.72813 16.1615 9.23992 16.1638 9.76262 16.1098C9.86822 16.0988 9.98016 16.0168 10.0235 15.8698L10.1657 15.3872C10.3134 14.8861 10.6992 14.5276 11.1383 14.3565C11.191 14.3359 11.2434 14.3146 11.2954 14.2925C11.7231 14.1108 12.2414 14.0956 12.6936 14.3419L13.1619 14.5971C13.2959 14.67 13.4303 14.6489 13.5101 14.5846C13.9057 14.2662 14.266 13.9059 14.5844 13.5103C14.6486 13.4305 14.6697 13.2961 14.5968 13.1622L14.3415 12.6935C14.0952 12.2413 14.1103 11.7232 14.292 11.2955C14.314 11.2437 14.3353 11.1914 14.3558 11.1387C14.5268 10.6997 14.8853 10.3138 15.3865 10.1661L15.8693 10.0238C16.0163 9.98048 16.0984 9.86854 16.1093 9.76294C16.1633 9.24018 16.161 8.72834 16.108 8.23248C16.0971 8.12997 16.0167 8.01965 15.8702 7.97647L15.3687 7.82864C14.8732 7.68261 14.5165 7.30352 14.3435 6.87007C14.3246 6.82276 14.3051 6.77576 14.285 6.72907C14.1002 6.29989 14.0841 5.77906 14.3314 5.32504L14.5809 4.86693C14.654 4.73286 14.6329 4.59789 14.568 4.51746C14.2459 4.11799 13.8817 3.75384 13.4822 3.43179C13.4017 3.36696 13.2668 3.34587 13.1327 3.41888L12.6745 3.66849C12.2205 3.91577 11.6997 3.89971 11.2706 3.71496C11.224 3.69489 11.1771 3.67543 11.1298 3.65657C10.6964 3.48352 10.3172 3.12684 10.1712 2.63137L10.0235 2.13016C9.98029 1.98366 9.86996 1.90329 9.76744 1.89235ZM8.1768 5.31971C10.8871 4.74284 13.2505 7.10541 12.6738 9.81636C12.3696 11.2465 11.246 12.3702 9.81574 12.6743C7.10492 13.2508 4.74253 10.8878 5.31916 8.17751C5.46327 7.50024 5.86338 6.85938 6.36105 6.36168C6.85871 5.86399 7.49953 5.46385 8.1768 5.31971ZM11.5609 9.57962C11.9661 7.67459 10.3182 6.02721 8.41367 6.43257C7.99987 6.52063 7.54695 6.78483 7.1656 7.1662C6.78426 7.54756 6.52009 8.00048 6.43204 8.41428C6.02683 10.3188 7.67412 11.9666 9.57905 11.5614C10.5698 11.3507 11.3501 10.5704 11.5609 9.57962Z" fill="${color}"/></svg>`;

	module.exports = {
		dragButton,
		magnifier,
		magnifierWithMenuAndDot,
		plus,
		smallCross,
		cross,
		bigCross,
		circledCross,
		chevronRight,
		chevronLeft,
		chevronDown,
		chevronUp,
		arrowRight,
		info,
		pen,
		largePen,
		lock,
		clip,
		clipOutline,
		location,
		dateTime,
		dateTimeOutline,
		clock,
		clockOutline,
		moreWithDot,
		dots,
		copy,
		settings,
		erase,
		settingsOutline,
	};
});
