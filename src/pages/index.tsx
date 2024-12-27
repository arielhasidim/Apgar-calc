import React, { useState, useEffect, useRef } from 'react';
import { Bell, Pause, Play, RotateCcw, Save, Copy, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import TermsDialog from '@/components/TermsDialog';

export default function ApgarCalculator() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedScores, setSelectedScores] = useState({
    color: null,
    heartRate: null,
    reflex: null,
    muscle: null,
    breathing: null
  });
  const [savedResults, setSavedResults] = useState([]);
  const audioRef = useRef(new Audio('/api/placeholder/audio'));

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 1;
          if ([60, 300, 600, 900, 1200].includes(newTime)) {
            audioRef.current.play();
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateTotal = () => {
    return Object.values(selectedScores).reduce((sum, score) => sum + (score || 0), 0);
  };

  const handleScoreSelect = (category, score) => {
    setSelectedScores(prev => ({
      ...prev,
      [category]: score
    }));
  };

  const saveResults = () => {
    const result = {
      time: formatTime(time),
      scores: { ...selectedScores },
      total: calculateTotal(),
      timestamp: new Date().toLocaleString('he-IL')
    };
    setSavedResults(prev => [...prev, result]);
  };

  const exportData = () => {
    if (savedResults.length === 0) return;
    
    const latestResult = savedResults[savedResults.length - 1];
    
    const formattedText = 
`ציון אפגר - ${latestResult.time}
צבע: ${latestResult.scores.color || 0}
דופק: ${latestResult.scores.heartRate || 0}
רפלקס: ${latestResult.scores.reflex || 0}
טונוס: ${latestResult.scores.muscle || 0}
נשימה: ${latestResult.scores.breathing || 0}
ציון כולל: ${latestResult.total}`;
    
    navigator.clipboard.writeText(formattedText);
  };

  const categories = [
    {
      name: 'color',
      title: 'צבע',
      options: [
        { score: 0, text: 'כחול/חיוור' },
        { score: 1, text: 'גפיים כחולים' },
        { score: 2, text: 'ורוד' }
      ]
    },
    {
      name: 'heartRate',
      title: 'דופק',
      options: [
        { score: 0, text: 'אין' },
        { score: 1, text: 'מתחת ל-100' },
        { score: 2, text: 'מעל ל-100' }
      ]
    },
    {
      name: 'reflex',
      title: 'תגובה לגירוי',
      options: [
        { score: 0, text: 'אין' },
        { score: 1, text: 'עווית פנים' },
        { score: 2, text: 'שיעול/התעטשות' }
      ]
    },
    {
      name: 'muscle',
      title: 'טונוס',
      options: [
        { score: 0, text: 'רפוי' },
        { score: 1, text: 'כיפוף קל' },
        { score: 2, text: 'תנועה פעילה' }
      ]
    },
    {
      name: 'breathing',
      title: 'נשימה',
      options: [
        { score: 0, text: 'אין' },
        { score: 1, text: 'איטית/חלשה' },
        { score: 2, text: 'טובה/בכי' }
      ]
    }
  ];

  return (
    <div>
      <TermsDialog />
      {
        <div className="rtl max-w-4xl mx-auto p-4 space-y-6 font-sans">
        <Card className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-3xl font-bold">{formatTime(time)}</div>
            <div className="flex gap-2">
              <Button
                onClick={() => setIsRunning(!isRunning)}
                variant="outline"
                size="icon"
              >
                {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              <Button
                onClick={() => setTime(0)}
                variant="outline"
                size="icon"
              >
                <RotateCcw className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </Card>
  
        <div className="space-y-4">
          {categories.map(category => (
            <div key={category.name} className="space-y-2">
              <div className="flex justify-end">
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {category.options.map((option, idx) => (
                  <Button
                    key={idx}
                    className={`bg-purple-500 text-white h-16 relative
                      ${selectedScores[category.name] === option.score ? 
                        'ring-2 ring-yellow-400 ring-offset-2' : ''}`}
                    onClick={() => handleScoreSelect(category.name, option.score)}
                  >
                    {selectedScores[category.name] === option.score && (
                      <Check className="absolute top-1 right-1 h-4 w-4" />
                    )}
                    {option.text}
                    <br />
                    {option.score}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        <Card className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr>
                  <th className="p-2">זמן</th>
                  <th className="p-2">צבע</th>
                  <th className="p-2">דופק</th>
                  <th className="p-2">תגובה לגירוי</th>
                  <th className="p-2">טונוס</th>
                  <th className="p-2">נשימה</th>
                  <th className="p-2">סה"כ</th>
                </tr>
              </thead>
              <tbody>
                {savedResults.map((result, idx) => (
                  <tr key={idx}>
                    <td className="p-2">{result.time}</td>
                    <td className="p-2">{result.scores.color}</td>
                    <td className="p-2">{result.scores.heartRate}</td>
                    <td className="p-2">{result.scores.reflex}</td>
                    <td className="p-2">{result.scores.muscle}</td>
                    <td className="p-2">{result.scores.breathing}</td>
                    <td className="p-2">{result.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
  
        <div className="flex gap-2 justify-center">
          <Button onClick={saveResults} className="gap-2 bg-purple-500">
            <Save className="h-4 w-4" />
            שמור תוצאה
          </Button>
          <Button onClick={exportData} className="gap-2 bg-purple-500">
            <Copy className="h-4 w-4" />
            ייצוא נתונים
          </Button>
        </div>
      </div>
      }
    </div>
    
  );
}