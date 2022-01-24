const refIcon = (condition) => {
    switch (condition) {
        case "storm":
            return '11d';
        case "snow":
            return '13d';
        case "hail":
            return '09d';
        case "rain":
            return '10d';
        case "fog":
            return '50d';
        case "clear_day":
            return '01d';
        case "clear_night":
            return '01n';
        case "cloud":
            return '03d';
        case "cloudly_day":
            return '02d';
        case "cloudly_night":
            return '02n';
        case "none_day":
            return null;
        case "none_night":
            return null;
            default:
            return null;
    }
}

export default refIcon;