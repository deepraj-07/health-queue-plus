# Receipt → Medicine Department Flow

## Root Cause
The flow works as follows:
1. Doctor creates prescription
2. Doctor forwards prescription to Medicine Dept (status → 'forwarded')
3. Doctor completes consultation (creates receipt)
4. Medicine Dept should see the prescription

