/** @format */

import React, { useState, useEffect } from 'react';
import CryptoPair from './AddAnalysisForm/CryptoPair';
import Description from './AddAnalysisForm/Description';
import Outlook from './AddAnalysisForm/Outlook';
import Recommendation from './AddAnalysisForm/Recommendation';
import TradingPrefrence from './AddAnalysisForm/TradingPrefrence';
import TypeOfTrade from './AddAnalysisForm/TypeOfTrade';
import ImageUpload from './AddAnalysisForm/ImageUpload';
import Timeframe from './AddAnalysisForm/Timeframe';
import Entry from './AddAnalysisForm/Entry';
import Tp from './AddAnalysisForm/Tp';
import Sl from './AddAnalysisForm/Sl';
import Message from './AddAnalysisForm/Message';
import * as BsIcons from 'react-icons/bs';
import '../css/addanalysis.css';
import { Center } from '@chakra-ui/react';
import { db, storage } from '../firebase';
import {
	ref,
	getDownloadURL,
	uploadBytesResumable,
	uploadBytes,
} from 'firebase/storage';
import {
	addDoc,
	collection,
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from 'firebase/firestore';

const AddAnalysis = () => {
	const [file, setfile] = useState('');
	const [img, setImg] = useState('');
	const [fileIndicator, setFileIndicator] = useState(false);
	const [imgName, setImgName] = useState('');
	const [typeOfTrade, setTypeOfTrade] = useState('');
	const [prefrence, setPrefrence] = useState('buy');
	const [cryptoPair, setCryptoPair] = useState('btcusd');
	const [description, setDescription] = useState('');
	const [recommendation, setRecommendation] = useState('');
	const [entry, setEntry] = useState('');
	const [tp, setTp] = useState('');
	const [sl, setSl] = useState('');
	const [outlook, setOutlook] = useState('');
	const [message, setMessage] = useState('');
	const [timeframe, setTimeframe] = useState('');
	const [send, setSend] = useState(false);
	const [progress, setProgress] = useState('');

	const onChangeImag = (e) => {
		e.preventDefault();
		setfile(e.target.files[0]);
		setImgName(e.target.files[0].name);
		setFileIndicator(true);
	};

	// const onChangeEntry = (e) => {
	// 	setEntry(e.target.value);
	// };

	// const onChangeTp = (e) => {
	// 	setEntry(e.target.value);
	// };

	// const onChangeSl = (e) => {
	// 	setSl(e.target.value);
	// };

	const onChangePrefrence = (e) => {
		setPrefrence(e.target.value);
	};

	const onChangeTf = (e) => {
		setTimeframe(e.target.value);
	};
	const tfs = [
		{
			label: 'Monthly',
			value: 'Monthly',
		},
		{
			label: 'Weekly',
			value: 'Weekly',
		},
		{
			label: 'Daily',
			value: 'Daily',
		},
		{
			label: '12 Hour',
			value: '12 Hour',
		},
		{
			label: '6 Hour',
			value: '6 Hour',
		},
		{
			label: '4 Hour',
			value: '4 Hour',
		},
		{
			label: '2 Hour',
			value: '2 Hour',
		},
		{
			label: '1 Hour',
			value: '1 Hour',
		},
		{
			label: '30 mins',
			value: '30 mins',
		},
		{
			label: '15 mins',
			value: '15 mins',
		},
		{
			label: '5 mins',
			value: '5 mins',
		},
		{
			label: '1 mins',
			value: '1 mins',
		},
	];

	const onChangeCrypto = (e) => {
		setCryptoPair(e.target.value);
	};

	const CryptoPairOptions = [
		{
			label: 'BTCUSD',
			value: 'btcusd',
		},
		{
			label: 'XAUUSD',
			value: 'xauusd',
		},
		{
			label: 'ETHUSD',
			value: 'ethusd',
		},
		{
			label: 'LTCUSD',
			value: 'ltcusd',
		},
		,
		{
			label: 'DOGUSD',
			value: 'dogusd',
		},
	];

	const tradePrefrenceOptions = [
		{
			label: 'Buy',
			value: 'buy',
		},
		{
			label: 'Sell',
			value: 'sell',
		},
		{
			label: 'Neutral ',
			value: 'neutral',
		},
	];

	useEffect(() => {
		const uploadImage = () => {
			const imageRef = ref(storage, `images/${file.name}`);
			uploadBytes(imageRef, file).then((snapshot) => {
				getDownloadURL(snapshot.ref).then((url) => {
					setImg(url);
					try {
						console.log(url);
					} catch (err) {
						console.log(err.message);
					}
				});
			});
		};

		file && uploadImage();
	}, [file]);

	const submit = async (e) => {
		e.preventDefault();
		setSend(true);

		let date = new Date().toUTCString().slice(5, 25);

		const data = {
			Image: img,
			timeframe: timeframe,
			typeOfTrade: typeOfTrade,
			prefrence: prefrence,
			pair: cryptoPair,
			description: description,
			recommendation: recommendation,
			entry: entry,
			tp: tp,
			sl: sl,
			outlook: outlook,
			time: date,
		};

		try {
			await addDoc(collection(db, 'Analysis'), {
				...data,
				timestamp: serverTimestamp(),
			});

			setTimeout(() => {
				setSend(false);
			}, 2000);

			setTimeout(() => {
				setMessage('Successfully Sent');
			}, 4000);
		} catch (e) {
			console.log(e);
			setMessage(e);
		}

		setTimeout(() => {
			setMessage('');
		}, 6000);

		setfile('');
		setTimeframe('');
		setCryptoPair('');
		setDescription('');
		setOutlook('');
		setTypeOfTrade('');
		setRecommendation('');
		setPrefrence('');

		setTimeout(() => {
			window.location.reload();
		}, 3000);
	};

	return (
		<React.Fragment>
			<Center>
				<div className="sending" style={{ opacity: send ? 1 : 0 }}>
					<span>Sending</span>
					<BsIcons.BsHourglassSplit />
				</div>
				{message ? <Message msg={message} /> : null}

				<div className="analyst-post">
					<form onSubmit={submit}>
						<ImageUpload onChangeImage={onChangeImag} imageName={imgName} />

						<Timeframe onChangeTf={onChangeTf} tfs={tfs} />

						<CryptoPair
							onChangeCrypto={onChangeCrypto}
							cpo={CryptoPairOptions}
						/>
						<TypeOfTrade value={typeOfTrade} setTypeOfTrade={setTypeOfTrade} />
						<TradingPrefrence
							onChangePrefrence={onChangePrefrence}
							tpo={tradePrefrenceOptions}
						/>
						<Description value={description} setDescription={setDescription} />
						<Recommendation
							value={recommendation}
							setRecommendation={setRecommendation}
						/>

						<Entry value={entry} setEntry={setEntry} />

						<Tp value={tp} setTp={setTp} />
						<Sl value={sl} setSl={setSl} />

						<Outlook value={outlook} setOutlook={setOutlook} />
						<Center className="form-input">
							<input type="submit" value="Post" />
						</Center>
					</form>
				</div>
			</Center>
		</React.Fragment>
	);
};

export default AddAnalysis;
