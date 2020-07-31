import { useState, useEffect } from 'react';

export const useInput = () => {
    const [answer, setAnswer] = useState(null);

    return answer;
}