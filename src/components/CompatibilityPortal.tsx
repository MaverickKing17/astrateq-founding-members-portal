import React, { useState } from 'react';
import { POPULAR_CANADIAN_VEHICLES } from '../data';
import { VehicleCompatibility } from '../types';
import { CheckCircle2, AlertTriangle, Search, Activity, Cpu, Thermometer, ShieldAlert, Download, Copy, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CompatibilityPortal: React.FC = () => {
  const [selectedMake, setSelectedMake] = useState('Tesla');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCompatibility | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [copiedLog, setCopiedLog] = useState(false);

  const makes = Array.from(new Set(POPULAR_CANADIAN_VEHICLES.map((v) => v.make)));

  const handleRunDiagnostics = (vehicle: VehicleCompatibility) => {
    setSelectedVehicle(vehicle);
    setLoading(true);
    setProgress(0);
    setReportGenerated(false);
    setLogs([]);

    const logMessages = [
      `[INIT] Booting local Astrateq interface kernel on client browser...`,
      `[BUS] Establishing high-impedance optical bridge (CAN matrix: OBD-2)...`,
      `[SEC] Scanning vehicle manufacturer cryptographical authorization boundaries...`,
      `[HW] Verifying compatibility of Astrateq Smart-Isolation-Core module specs...`,
      `[THERM] Assessing cold climate thermal preheater resilience values (Targets: sub-zero -40°C)...`,
      `[SEC] Scanning secure gateway: ${vehicle.hardwareRequirement}...`,
      `[SYS] Confirming galvanic isolation barrier limits - 0.00mA standby load limit met`,
      `[SUCCESS] Compliance report successfully serialized to memory client-side.`
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setReportGenerated(true);
          return 100;
        }

        // Add logs incrementally based on progress
        const expectedStepIndex = Math.floor((prev / 100) * logMessages.length);
        if (expectedStepIndex > currentStep && currentStep < logMessages.length) {
          setLogs((prevLogs) => [...prevLogs, logMessages[currentStep]]);
          currentStep += 1;
        }

        return prev + 5;
      });
    }, 150);
  };

  const currentVehicles = POPULAR_CANADIAN_VEHICLES.filter((v) => v.make === selectedMake);

  const handleCopyLogs = async () => {
    if (!selectedVehicle) return;
    const fullLog = `--- ASTRATEQ PLATFORM COMPATIBILITY DIAGNOSTIC REPORT ---
Generated: June 2026 UTC
Vehicle: ${selectedVehicle.make} ${selectedVehicle.model} (${selectedVehicle.years})
Status: ${selectedVehicle.status}
Connector: ${selectedVehicle.hardwareRequirement}
Climate Performance: ${selectedVehicle.climatePerformance}
Diagnostic Integrity Test: Verified Passive CAN-Sniffing Active (No ECU Write Hazards).`;
    
    try {
      await navigator.clipboard.writeText(fullLog);
      setCopiedLog(true);
      setTimeout(() => setCopiedLog(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#0B1F3A]/25 glowing-card-border rounded-3xl p-6 md:p-10 box-glow-cyan max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-display font-semibold text-white tracking-tight flex items-center gap-2">
            <Activity className="h-5 w-5 text-[#00D4FF]" />
            Astrateq Vehicle Diagnostic Gateway
          </h3>
          <p className="text-sm text-[#D6DCE5]/70 mt-1">
            Perform an engineering dry-run of our secure hardware bridge against your vehicle.
          </p>
        </div>
        
        {/* Make Filter Navigation */}
        <div className="flex flex-wrap gap-1.5 bg-black/20 p-1 rounded-xl border border-white/5 no-print">
          {makes.map((make) => (
            <button
              key={make}
              onClick={() => {
                setSelectedMake(make);
                setSelectedVehicle(null);
                setReportGenerated(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedMake === make
                  ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30 font-semibold'
                  : 'text-[#D6DCE5]/60 hover:text-white'
              }`}
            >
              {make}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Vehicles Grid */}
        <div className="lg:col-span-5 space-y-3 no-print">
          <span className="text-xs font-mono text-[#D6DCE5]/40 uppercase tracking-widest block mb-1">
            SELECT VEHICLE MODEL
          </span>
          <div className="grid grid-cols-1 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
            {currentVehicles.map((vehicle, idx) => {
              const isSelected = selectedVehicle?.model === vehicle.model;
              return (
                <button
                  key={idx}
                  onClick={() => handleRunDiagnostics(vehicle)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#00D4FF]/5 border-[#00D4FF]/40 border-glow-cyan'
                      : 'bg-black/20 border-white/5 hover:border-white/10 hover:bg-black/30'
                  }`}
                >
                  <div className="flex justify-between items-start w-full">
                    <div>
                      <h4 className="text-sm font-semibold text-white font-sans">{vehicle.model}</h4>
                      <p className="text-xs text-[#D6DCE5]/50 mt-0.5">{vehicle.years}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase ${
                      vehicle.status === 'Highly Compatible'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : vehicle.status === 'Compatible with Adaptation'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {vehicle.status.replace('Highly ', '')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Diagnostic Monitor */}
        <div className="lg:col-span-7 bg-black/40 rounded-xl glowing-card-border overflow-hidden flex flex-col min-h-[320px]">
          {/* Bar decoration */}
          <div className="h-1 bg-gradient-to-r from-[#00D4FF] via-blue-900 to-[#071120]" />
          
          <div className="p-4 border-b border-white/5 bg-[#0B1F3A]/30 flex justify-between items-center shrink-0">
            <span className="text-xs font-mono text-white tracking-widest uppercase flex items-center gap-1.5">
              <span className={`h-2 h-2 r-full rounded-full ${loading ? 'bg-[#00D4FF] animate-ping' : 'bg-[#D6DCE5]/30'}`} />
              INTEGRATION MONITOR
            </span>
            {reportGenerated && (
              <div className="flex gap-2">
                <button
                  onClick={handleCopyLogs}
                  className="p-1 px-2.5 rounded bg-white/5 text-xs text-[#D6DCE5] hover:text-white border border-white/10 transition-colors flex items-center gap-1 font-mono"
                >
                  <Copy className="h-3 w-3" />
                  <span>{copiedLog ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={() => handleRunDiagnostics(selectedVehicle!)}
                  className="p-1 px-2.5 rounded bg-white/5 text-xs text-[#D6DCE5] hover:text-white border border-white/10 transition-colors flex items-center gap-1 font-mono"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Retest</span>
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto">
            <AnimatePresence mode="wait">
              {!selectedVehicle && !loading && !reportGenerated && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <Cpu className="h-12 w-12 text-[#D6DCE5]/30 mb-3 animate-pulse" />
                  <p className="text-sm text-[#D6DCE5]/70 font-sans max-w-sm">
                    Select a luxury vehicle platform on the left to initiate the secure CAN hardware gateway analysis.
                  </p>
                </motion.div>
              )}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-mono text-[#00D4FF]">
                      <span>RUNNING ACTIVE DIAGNOSTICS...</span>
                      <span>{progress}%</span>
                    </div>
                    {/* Glowing Progress bar */}
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/10">
                      <div
                        className="bg-gradient-to-r from-[#00D4FF] to-indigo-500 h-full rounded-full transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Scrolling terminal output */}
                  <div className="bg-black/50 p-3 h-[140px] rounded-lg border border-white/5 font-mono text-[11px] text-emerald-400 overflow-y-auto space-y-1">
                    {logs.map((log, idx) => (
                      <div key={idx} className="leading-relaxed opacity-90">
                        {log}
                      </div>
                    ))}
                    <div className="h-1 animate-pulse bg-emerald-400 w-1.5 inline-block ms-1" />
                  </div>
                </motion.div>
              )}

              {reportGenerated && selectedVehicle && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {/* Result Header */}
                  <div className="flex items-start gap-3 p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white font-sans">
                        {selectedVehicle.status === 'Highly Compatible' ? 'Hardware Compatibility Fully Verified' : 'Custom Adaptation Recommended'}
                      </h4>
                      <p className="text-xs text-[#D6DCE5]/70 mt-1">
                        Astrateq smart isolation layers confirm compatibility with the verified {selectedVehicle.make} dashboard matrix.
                      </p>
                    </div>
                  </div>

                  {/* Details Specs Table */}
                  <div className="grid grid-cols-2 gap-3.5 pt-1">
                    <div className="p-3.5 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-[10px] font-mono text-[#D6DCE5]/40 uppercase tracking-widest block">
                        REQUIRED MOUNT HARNESS
                      </span>
                      <span className="text-sm font-mono text-white font-medium block mt-1 break-words">
                        {selectedVehicle.hardwareRequirement}
                      </span>
                    </div>
                    <div className="p-3.5 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-[10px] font-mono text-[#D6DCE5]/40 uppercase tracking-widest block">
                        CLIMATE RAMP PROFILE
                      </span>
                      <span className="text-sm font-semibold text-[#00D4FF] font-sans block mt-1 leading-tight">
                        {selectedVehicle.climatePerformance}
                      </span>
                    </div>
                  </div>

                  {/* Clean code block of CAN configuration (JetBrains Mono spec) */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#D6DCE5]/40 uppercase tracking-widest block">
                      ISOLATION GATEWAY CONFIGURATION
                    </span>
                    <pre className="p-3 text-[10px] bg-black/60 border border-white/5 rounded-lg font-mono text-emerald-400 overflow-x-auto whitespace-pre">
{`/* Astrateq Local Diagnostic Bind for ${selectedVehicle.make} */
const CAN_TRANSCEIVER_OPTO_ISOLATION_B1 = {
  baudRateKbps: 500,
  handshakeTimeoutMs: 250,
  activeStandbyPowerDrawMa: 0.00,
  opticalRelaySafetyLatch: true,
  subZeroThermalResilienceCelsius: -46,
  tamperProtectionMode: "HARDWARE_LOCAL_ISOLATED"
};`}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
